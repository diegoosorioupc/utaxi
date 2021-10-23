<template>
  <v-app>
    <v-app-bar app color="#f2f2f2 dark--text">
      <v-app-bar-title>
        <span class="black-text">UTaxi</span>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span>Get to class safely</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/home" color="black">Home</v-btn>
      <v-btn plain to="/my_datas" color="black">My Profile</v-btn>
      <v-btn plain to="/my_routes" color="black">My Routes</v-btn>
      <v-btn plain to="/homepage" color="black">Sign Off</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>