import Intern from "./components/intern/Intern.vue";
import Home from "./components/home/Home.vue";


export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/internship",
    name: "internship",
    componenet: Intern
  },
  { path: "*", redirect: "/" }
];
