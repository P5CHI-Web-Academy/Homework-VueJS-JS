import 'vuetify/dist/vuetify.min.css'
// import './assets/styles/main.scss';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './components/App.vue';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App)
})
