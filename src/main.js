import Vue from 'vue'
import App from './App.vue'
import Toolbarhome from './Toolbarhome'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  vuetify,
  router,
  render: h => h(Toolbarhome)
}).$mount('#toolbarhome')
