<template>
  <section>
    <div class="image-home">
      <v-container class="d-flex">
        <v-card class="mx-auto" max-width="380">
          <v-img v-bind:src="require(`../../assets/Imagencita01.jpg`)" height="300px"></v-img>
          <v-card-title>Meet new students</v-card-title>
          <v-card-subtitle>Interact with students from different universities and expand your circle of friends.</v-card-subtitle>
        </v-card>

        <v-card class="mx-auto" max-width="380">
          <v-img v-bind:src="require(`../../assets/Imagencita02.jpg`)" height="300px"></v-img>
          <v-card-title>Move safely</v-card-title>
          <v-card-subtitle>All those students have their university card or TIU to prove their identity.</v-card-subtitle>
        </v-card>

        <v-card class="mx-auto" max-width="380">
          <v-img v-bind:src="require(`../../assets/Imagencita03.jpg`)" height="300px"></v-img>
          <v-card-title>Build your route</v-card-title>
          <v-card-subtitle>Generate the route you will drive on and wait for the students to join.</v-card-subtitle>
        </v-card>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.image-home{
  width: 100%;
  padding: 0;
  height: 93.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url("../../assets/home-cars.jpg");
  background-position: center;
  background-size: cover;

}
</style>