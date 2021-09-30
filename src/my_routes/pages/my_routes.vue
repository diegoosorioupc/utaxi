<template>
  <v-row align="center" class="px-3 mx-auto">
    <v-col cols="12" md="4"><h1>My_routes</h1></v-col>
    <v-col cols="12" md="8">
      <v-spacer></v-spacer>
      <v-text-field v-model="title" append-icon="mdi-magnify"
                    label="Search by Title"
                    single-line hide-details></v-text-field>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-data-table :headers="headers" :items="my_routes" :search="title" sort-by="title">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Routes Catalogue</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <!-- Insert or Edit Dialog -->
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{on, attrs}">
                  <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Route</v-btn>
                </template>
                <v-card>
                  <v-card-title>{{ formTitle }}</v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.title" label="Route title"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.date_route" label="Date route"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.place_of_departure" label="Place of departure"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.place_of_arrival" label="Place of arrival"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-select :items="my_routeStatus" v-model="editedItem.status" label="Current Status"></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="close">Cancel</v-btn>
                    <v-btn color="primary" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- Delete Confirmation Dialog -->
              <v-dialog v-model="dialogDelete" max-widht="500px">
                <v-card>
                  <v-card-title>Delete Item</v-card-title>
                  <v-card-text>¿Are you sure you want to delete this item?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="primary" @click="deleteItemConfirm">Delete</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <!-- Actions Section -->
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <!-- No Data Scenario -->
          <template v-slot:no-data>
            <v-btn color="primary" @click="retrieveMy_routes">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import My_routesService from '../services/my_routes.service'
export default {
  name: "my_routes",
  data: () => ({
    my_routes: [],
    title: '',
    headers: [
      {text: 'Id',                 value: 'id',                 sortable: true, align: 'end'},
      {text: 'Title',              value: 'title',              sortable: true, align: 'start'},
      {text: 'Date_Route',         value: 'date_route',         sortable: false},
      {text: 'Place_Of_Departure', value: 'place_of_departure', sortable: false},
      {text: 'Place_Of_Arrival',   value: 'place_of_arrival',   sortable: false},
      {text: 'Price',              value: 'price',              sortable: false},
      {text: 'Description',        value: 'description',        sortable: false},
      {text: 'Status',             value: 'status',             sortable: true},
      {text: 'Actions',            value: 'actions',            sortable: false},
    ],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {id: 0, title: '', place_of_departure: '', place_of_arrival: '', price: 0, description: '', status: ''},
    my_routeStatus: ['Published', 'Pending']
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Route' : 'Edit Route';
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    getDisplayMy_route(my_route) {
      return {
        id: my_route.id,
        title: my_route.title,
        date_route: my_route.date_route,
        place_of_departure: my_route.place_of_departure,
        place_of_arrival: my_route.place_of_arrival,
        price: my_route.price,
        description: my_route.description,
        status: my_route.published ? 'Published' : 'Pending',
      };
    },

    retrieveMy_routes() {
      My_routesService.getAll()
      .then((response) => {
        this.my_routes = response.data.map(this.getDisplayMy_route);
      })
      .catch(e => {
        console.log(e);
      });
    },

    refreshList() {
      this.retrieveMy_routes();
    },

    editItem(item) {
      this.editedIndex = this.my_routes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.my_routes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // TODO: Delete Item
      this.deleteMy_route(this.editedItem.id).then(() => this.refreshList()).catch(e => console.log(e));
    },

    save() {
      // TODO: Create or Update Item
      let item = this.editedItem;
      let dto = { title: item.title, date_route: item.date_route, place_of_departure: item.place_of_departure,
                  place_of_arrival : item.place_of_arrival, price : item.price, description : item.description,
                  published : item.status === 'Published'};
      if (this.editedIndex > -1) {
        dto.id = item.id;
        My_routesService.update(item.id, dto).then(() => this.refreshList()).catch(e => console.log(e));
      } else My_routesService.create(dto).then(() => this.refreshList()).catch(e => console.log(e));
      this.close();
    },

    deleteMy_route(id) {
      My_routesService.delete(id)
      .then(() => {
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
    }
  },

  mounted() {
    this.retrieveMy_routes();
  }
}
</script>

<style scoped>

</style>