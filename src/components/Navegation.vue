<template>
  <div>
    <v-app-bar
        app
        :color="color"
        :flat="flat"
        grey lighten-2
        class="px-15"
        :class="{ expand: flat }">
      <v-toolbar-title>
        <v-img src="@/assets/Logo_UTaxi.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-4"
          v-if="isXs"
      />
      <div v-else>
        <v-btn text plain to="/home">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text plain to="/my_profile">
          <span class="mr-2">My profile</span>
        </v-btn>
        <v-btn text plain to="/my_routes">
          <span class="mr-2">My routes</span>
        </v-btn>
        <v-btn text plain to="/sign_off">
          <span class="mr-2">Sign off</span>
        </v-btn>
        <v-btn rounded outlined text >
          <span class="mr-2">Contact Us</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navegation"
}
</script>

<style scoped>

</style>