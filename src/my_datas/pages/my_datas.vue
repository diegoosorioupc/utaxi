<template>
  <v-row align="center" class="px-3 mx-auto">
    <v-col cols="12" md="4"><h1>My Profile</h1></v-col>
    <v-col cols="12" md="8">
      <v-spacer></v-spacer>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-data-table :headers="headers" :items="my_datas" :search="name" sort-by="name">
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <!-- Insert or Edit Dialog -->
              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>{{ formTitle }}</v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.lastname" label="Last Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.date_of_birth" label="Date of Birth"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.cellphone" label="Cellphone"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.study_center" label="Study Center"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.university_id" label="University Id"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.license_number" label="License Number"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.vehicle_model" label="Vehicle Model"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.license_plate" label="License Plate"></v-text-field>
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
          </template>
          <!-- No Data Scenario -->
          <template v-slot:no-data>
            <v-btn color="primary" @click="retrieveMy_datas">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import My_datasService from '../services/my_datas.service'
export default {
  name: "my_datas",
  data: () => ({
    my_datas: [],
    headers: [
      {text: 'Id',             value: 'id',             sortable: true, align: 'end'},
      {text: 'Name',           value: 'name',           sortable: true, align: 'start'},
      {text: 'Last Name',      value: 'lastname',       sortable: false},
      {text: 'E-mail',         value: 'email',          sortable: false},
      {text: 'Date of Birth',  value: 'date_of_birth',  sortable: false},
      {text: 'Cellphone',      value: 'cellphone',      sortable: false},
      {text: 'Study Center',   value: 'study_center',   sortable: false},
      {text: 'University Id',  value: 'university_id',  sortable: true},
      {text: 'License Number', value: 'license_number', sortable: true},
      {text: 'Vehicle Model',  value: 'vehicle_model',  sortable: true},
      {text: 'License Plate',  value: 'license_plate',  sortable: true},
      {text: 'Actions',        value: 'actions',        sortable: false},
    ],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {id: 0, name: '', lastname: '', email: '', date_of_birth: '', cellphone: 0, study_center: '', university_id: '', license_number: '', vehicle_model: '', license_plate: ''},
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Profile' : 'Edit Profile';
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

    getDisplayMy_data(my_data) {
      return {
        id: my_data.id,
        name: my_data.name,
        lastname: my_data.lastname,
        email: my_data.email,
        date_of_birth: my_data.date_of_birth,
        cellphone: my_data.cellphone,
        study_center: my_data.study_center,
        university_id: my_data.university_id,
        license_number: my_data.license_number,
        vehicle_model: my_data.vehicle_model,
        license_plate: my_data.license_plate,
      };
    },

    retrieveMy_datas() {
      My_datasService.getAll()
          .then((response) => {
            this.my_datas = response.data.map(this.getDisplayMy_data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveMy_datas();
    },

    editItem(item) {
      this.editedIndex = this.my_datas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.my_datas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // TODO: Delete Item
      this.deleteMy_data(this.editedItem.id).then(() => this.refreshList()).catch(e => console.log(e));
    },

    save() {
      // TODO: Create or Update Item
      let item = this.editedItem;
      let dto = { name: item.name, lastname: item.lastname, email: item.email,
        date_of_birth : item.date_of_birth, cellphone : item.cellphone, study_center : item.study_center,
        university_id : item.university_id, license_number : item.license_number, vehicle_model : item.vehicle_model,
        license_plate : item.license_plate};
      if (this.editedIndex > -1) {
        dto.id = item.id;
        My_datasService.update(item.id, dto).then(() => this.refreshList()).catch(e => console.log(e));
      } else My_datasService.create(dto).then(() => this.refreshList()).catch(e => console.log(e));
      this.close();
    },

    deleteMy_data(id) {
      My_datasService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    }
  },

  mounted() {
    this.retrieveMy_datas();
  }
}
</script>

<style scoped>

</style>