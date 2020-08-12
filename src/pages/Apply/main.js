import Vue from 'vue';
import App from './App.vue';
import vuetify from './vuetify';
import Vuelidate from 'vuelidate';

import store from '../../store.js';
import(/* webpackMode: "eager" */ 'vuetify/dist/vuetify.min.css');

Vue.use(Vuelidate);

Vue.config.productionTip = false;
window.EventBus = new Vue();
new Vue({
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
