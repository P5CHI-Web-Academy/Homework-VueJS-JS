import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './components/App.vue'
import { fibSequence } from './fibonacci.js'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(fibSequence(30))
