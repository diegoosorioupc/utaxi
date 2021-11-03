<template>
  <v-app>
    <v-app-bar
        app
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
        <v-btn text plain to="/Client">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text plain to="/my_routes">
          <span class="mr-2">My Routes</span>
        </v-btn>
        <v-btn text plain to="/profile">
          <span class="mr-2">Profile</span>
        </v-btn>
        <v-btn  text plain to="/about">
          <span class="mr-2">About Us</span>
        </v-btn>
        <v-btn rounded outlined plain @click="logout">
          <span>Logout</span>
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
  name: "Client",
  methods: {
    logout() {
      localStorage.removeItem('userId');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>