<template>
  <section class="Home">
    <div class="image-main">
    <v-container class="main-text d-flex justify-left align-left flex-column">

      <div class="text-main">
        <p class="Carrousell--Text">
          Save time and money <br>meeting people
        </p>

        <p class="text">
          Now yo can go to your university <br>
          safely, interacting with students <br>
          and saving time.
        </p>
        <v-btn
            elevation="4"
            small
            x-large
            dark
        >CONTACT US</v-btn>
      </div>
    </v-container>
    </div>
    <Feature></Feature>
  </section>
</template>

<script>
// @ is an alias to /src

import Feature from "../components/Feature";
export default {
  name: 'Home',
  components: {
    Feature
  }
}
</script>
<style scoped>
.image-main {
  width: 100%;
  padding: 0;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url("../assets/bgHero1.jpg");
  background-position: center;
  background-size: cover;
  padding: 0;
}
.Carrousell--Text {
  text-align: left;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color:black;
  margin-bottom: 1rem;
}

.text-main{
  width: 100%;
}
.text{
  font-size: 1.6rem;
}
.main-text{
  margin-left: 20%;

}
.Home{
  padding: 0;
}
</style>