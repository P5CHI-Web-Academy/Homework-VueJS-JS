// import all styles
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// import vue.js
import Vue from 'vue'

// import style framework
import Vuetify from 'vuetify'

// import main component
import App from './components/App.vue'

// import weirdsum and fibonacci functions
import { weirdsum1, weirdsum2 } from './weirdsums.js'
import { fibonacci } from './fibonacci.js'

Vue.use(Vuetify)

// render applications
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(weirdsum1(1)(2)(3)(4)())
console.log(weirdsum2(5)(6)(7)(8))

const fibonacciArray = []

for (let i = 0; i < 30; i++) {
  fibonacciArray.push(fibonacci(i))
}

console.log(fibonacciArray)
