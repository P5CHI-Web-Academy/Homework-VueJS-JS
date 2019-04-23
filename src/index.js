import './styles/main.scss';

import Vue from 'vue';

import App from './components/App.vue';

// eslint-disable-next-line no-new
new Vue({
  el: '#footer',
  render: h => h(App),
});

console.log('webpack work');
