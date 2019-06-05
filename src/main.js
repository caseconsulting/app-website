import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import { routes } from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
