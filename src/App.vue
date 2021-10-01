<template>
  <v-app>
    <navegation></navegation>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<style>

</style>
<script>
import Navegation from "./components/Navegation";
export default {
  components: {Navegation}
}
</script>