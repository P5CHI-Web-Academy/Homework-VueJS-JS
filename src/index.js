import '@style/style.scss'
import Vue from 'vue'
import Foo from '@component/App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Foo),
})
