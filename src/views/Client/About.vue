<template>
  <div class="image-about">
    <v-card class="mx-auto" max-width="700">
      <v-card-title>UTaxi</v-card-title>
      <v-card-text>UTaxi is a mobile platform that allows university students to connect with other university students to take trips to the university, that is, students with cars can share theirs with others who live near them to go to university. These people can charge a ticket to each student they take through the platform, be able to select the people they want to take and so they have their seat reserved.</v-card-text>
      <v-card-title>Dynamic Solutions Impacts</v-card-title>
      <v-card-text>Dynamic Solutions Impacts is a platform company focused on mobile devices, however, we also develop platforms for other types of devices, but mainly we target mobile devices since they are the most used devices currently worldwide and are more frequent in young people which is our target audience. We want to provide solutions to people's daily problems in a safe and effective way, for this we propose different project ideas among the members of the company to know which is the one that best solves people's day-to-day problems and choose the best option to develop.</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.image-about{
  width: 100%;
  padding: 0;
  height: 93.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url("../../assets/Imagen01.jpg");
  background-position: center;
  background-size: cover;
}
</style>