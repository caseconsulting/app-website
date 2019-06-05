import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import Internship from "./components/intern/Intern.vue";
import Home from "./components/home/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
=======
      path: "/",
      name: "home",
      component: Home
>>>>>>> 545-creating-routes: Added routes for Home and Intern page
    },
    {
      path: "/intern",
      componenet: Internship
    },
    { path: "*", redirect: "/" }
  ]
});
