import '@style/style.scss'
import Vue from 'vue'
import Foo from '@component/App.vue'
import Fibonacci from '@component/Fibonacci.vue'

Vue.component('fibonacci', Fibonacci)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Foo),
})
