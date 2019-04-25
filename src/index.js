import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './components/App.vue'

import { fib30, curryingSumWithClosingBrackets, curryingSumWithoutClosingBrackets } from './components/homework'

Vue.use(Vuetify)

// render applications
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log('30 Fibonacci numbers: ')
console.log(fib30())

console.log('curryingSumWithClosingBrackets(1)(2)(3)(4)() = ' + curryingSumWithClosingBrackets(1)(2)(3)(4)())
console.log('curryingSumWithoutClosingBrackets(1)(2)(3)(4) = ' + curryingSumWithoutClosingBrackets(1)(2)(3)(4))
