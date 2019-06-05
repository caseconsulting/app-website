import Intern from "./components/intern/Intern.vue";
//import Home from "./components/home/Home.vue";
import Home from "./App.vue";

export const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/internship",
    componenet: Intern
  },
  { path: "*", redirect: "/" }
];
