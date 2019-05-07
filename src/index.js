import '@style/style.scss'
import Vue from 'vue'
import Foo from '@component/App.vue'
import Fibonacci from '@component/Fibonacci.vue'
import { sumFn, sumFnArrow, sumFnInfinity } from './helpers/sum-function'

console.log(sumFn(1)(2)(3)(4))
console.log(sumFnArrow(1)(2)(3)())
console.log(sumFnInfinity(2)(2)(2)(2)(2)(3)())

Vue.component('fibonacci', Fibonacci)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Foo),
})
