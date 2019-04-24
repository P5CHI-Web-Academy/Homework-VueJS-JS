// import all styles
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// import vue.js
import Vue from 'vue'

// import style framework
import Vuetify from 'vuetify'

// import main component
import App from './components/App.vue'

Vue.use(Vuetify)

// render applications
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
