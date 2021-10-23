<template>
  <v-container>
    <v-row>
      <v-img max-width="auto"
             src="../../public/Imagen02.jpg">
        <v-row>
          <v-container justify="end">
            <v-card class="mx-auto" max-width="400">
              <v-img src="../../public/Timon.jpg" height="200px"></v-img>
              <v-card-title>Drive with us and generate profits</v-card-title>
              <v-card-subtitle>Generate money safely and interact with students from different universities.</v-card-subtitle>
              <v-card-actions>
                <v-btn depressed color="primary" href='/signup'>Sign Up</v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="mx-auto" max-width="400">
              <v-img src="../../public/Persona.jpg" height="200px"></v-img>
              <v-card-title>Save time and money meeting people</v-card-title>
              <v-card-subtitle>Now you can go to your university safely, interacting with students and saving time.</v-card-subtitle>
              <v-card-actions>
                <v-btn depressed color="primary" href='/login'>Log In</v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-row>
      </v-img>
    </v-row>

    <v-row></v-row>

    <v-row>
      <v-card class="mx-auto" max-width="380">
        <v-img src="../../public/Imagencita01.jpg" height="300px"></v-img>
        <v-card-title>Meet new students</v-card-title>
        <v-card-subtitle>Interact with students from different universities and expand your circle of friends.</v-card-subtitle>
      </v-card>

      <v-card class="mx-auto" max-width="380">
        <v-img src="../../public/Imagencita02.jpg" height="300px"></v-img>
        <v-card-title>Move safely</v-card-title>
        <v-card-subtitle>All those students have their university card or TIU to prove their identity.</v-card-subtitle>
      </v-card>

      <v-card class="mx-auto" max-width="380">
        <v-img src="../../public/Imagencita03.jpg" height="300px"></v-img>
        <v-card-title>Build your route</v-card-title>
        <v-card-subtitle>Generate the route you will drive on and wait for the students to join.</v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Homepage",
}
</script>

<style scoped>

</style>