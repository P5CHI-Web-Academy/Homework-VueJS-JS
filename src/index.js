import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './components/App.vue'
import { fibSequence } from './fibonacci.js'
import { sum1 } from './sum1.js'
import { sum2 } from './sum2.js'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log('=== Fibonacci Sequence ===')
console.log(fibSequence(30))
console.log('=== Sums ===')
console.log(sum1(1)(2)(3)(4)())
console.log(sum2(1)(2)(3)(4))
