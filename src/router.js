import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import Intern from "./components/intern/Intern.vue";
//import Home from "./components/home/Home.vue";
import Home from "./App.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "home",
      component: Home
    },
    {
      path: "/intern",
      componenet: Intern
    },
    { path: "*", redirect: "/" }
  ],
  mode: "history"
});
