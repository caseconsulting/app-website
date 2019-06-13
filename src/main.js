import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// import router from "./router";
import store from './store';
import { routes } from './routes';
//import * as HSCore from './assets/vendor/unity/js/hs.core';

Vue.use(VueRouter);
//Vue.use(HSCore);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
