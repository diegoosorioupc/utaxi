<template>
 <v-container>
   <v-row>
     <v-carousel hide-delimiters>
       <v-carousel-item
           v-for="(item,i) in items"
           :key="i"
           :src="item.src"
       ></v-carousel-item>
     </v-carousel>
   </v-row>

   <v-row>
     <v-card class="mx-auto" max-width="400">
       <v-img class="white--text align-end" height="200px" src="http://static.wixstatic.com/media/9f2aca_5a2cc197325247d787148f293d1b9127.jpg"></v-img>
       <v-card-subtitle class="pb-0">Enter from here if you want to view or modify your generated routes</v-card-subtitle>
       <v-card-text class="text--primary">
         <div>Review and modify your routes</div>
       </v-card-text>
       <v-card-actions>
         <v-btn depressed color="primary" href='/my_datas'>My profile</v-btn>
       </v-card-actions>
     </v-card>

     <v-card class="mx-auto" max-width="400">
       <v-img class="white--text align-end" height="200px" src="https://www.ecestaticos.com/imagestatic/clipping/c1b/6cc/c1b6cce8cf0c2d7a1fc7fd114a196934/por-que-los-jovenes-pasan-de-sacarse-el-carne-de-conducir-prefieren-el-movil.jpg?mtime=1622737707"></v-img>
       <v-card-subtitle class="pb-0">Enter from here if you want to view or modify your personal data</v-card-subtitle>
       <v-card-text class="text--primary">
         <div>Review and modify your personal data</div>
       </v-card-text>
       <v-card-actions>
         <v-btn depressed color="primary" href='/my_routes'>My routes</v-btn>
       </v-card-actions>
     </v-card>
   </v-row>
 </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          src: 'https://images.ecestaticos.com/FNr76rbQqBA0bbgNWdIpBNW2D0Y=/0x0:2272x1418/1200x900/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/303/44d/f1e/30344df1e1ba07f19c42b39c31800574.jpg',
        },
        {
          src: 'https://www.sebandainsurance.com/blog/wp-content/uploads/2020/08/03-joven-manejando-1024x683.jpg',
        },
        {
          src: 'https://image.freepik.com/foto-gratis/amo-mi-carro-apuesto-joven-conducia-su-automovil-sonriendo-camara_231208-819.jpg',
        },
        {
          src: 'https://img.freepik.com/foto-gratis/vista-lateral-hombre-negocios-moderno-joven-empresario-barbudo-ropa-formal-tocando-panel-control_386167-5970.jpg?size=626&ext=jpg&ga=GA1.2.525463292.1628726400',
        },
      ],
    }
  },
}
</script>
