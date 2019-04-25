import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './components/App.vue'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
