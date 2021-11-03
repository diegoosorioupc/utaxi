<template>
  <v-container >
    <h1 class="text-center mb-2" >My Profile</h1>
    <v-card class="mx-auto pa-2" color="rgba(3,64,120,0.19)" max-width="500px">

      <v-img v-bind:src="require(`../../../src/assets/${ profile.image }`)" max-width="300px" class="mx-auto mt-3"></v-img>
      <v-card-title ><b class="mx-auto">{{profile.names +" "+ profile.lastNames }}</b></v-card-title>
      <v-card-text><v-icon color="black darken-2 stroke" class="">home</v-icon>{{ profile.address }}</v-card-text>
      <v-card-text><v-icon color="black darken-2">email</v-icon>{{ profile.email }}</v-card-text>
      <v-card-text><v-icon color="black darken-2">face</v-icon>{{ profile.age }} years</v-card-text>
      <v-card-text><v-icon color="black darken-2">phone</v-icon>{{ profile.cellphoneNumber }}</v-card-text>
      <v-card-text><v-icon color="black darken-2">map</v-icon>{{ profile.city }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ClientsService from "../../core/clients-service";
export default {
  name: "Profile",
  data() {
    return {
      profile: {},
    }
  },
  methods: {
    async retrieveClients() {
      let clientId = localStorage.getItem("userId");

      await ClientsService.getById(clientId)
          .then(response => {
            this.profile = response.data
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveClients();
  }
}
</script>

<style scoped>

</style>