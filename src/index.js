import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './components/App.vue'

Vue.use(Vuetify)

//render applications
new Vue({
    el: '#app',
    render: h => h(App)
})

console.log('test message');