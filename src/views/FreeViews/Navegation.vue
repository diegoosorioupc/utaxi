<template>
  <v-app>
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
        <v-btn text plain to="/login">
          <span class="mr-2">Login</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Navegation"
}
</script>

<style scoped>

</style>