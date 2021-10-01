<template>
  <div class="Feature">
    <v-container class="main">
      <v-col cols="2" class="main  d-flex flex-row justify-center align-center  ma-auto">
        <v-row class="ma-0 pa-0">
          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">
              <div class="img1 "></div>
              <p class="text-h4 text--primary">
                Security
              </p>

              <div class="text--primary">
                We want you to move freely, make the most<br>
                of your time, and be connected to the people <br>and places that matter most to you.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">
              <div class="img2"></div>
              <p class="text-h4 text--primary">
                Supporting students
              </p>

              <div class="text--primary">
                Our people, process, and technology can help transform<br>
                cities into safer, more efficient, and more beautiful places.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">
              <div class="img3"></div>
              <p class="text-h4 text--primary">
                Safer communities
              </p>

              <div class="text--primary">
                Through partnerships with leading organizations, <br>
                we’re working to help make driving safer and prevent <br>
                incidents on the road.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Feature"
}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}

.main{

  max-width: 100%;

}
.img1{
  background-image: url("../assets/icon1.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img2{
  background-image: url("../assets/icon2.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img3{
  background-image: url("../assets/icon3.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
</style>