import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';
import Capabilities from '@/views/Capabilities.vue';
import Culture from '@/views/Culture.vue';
import Careers from '@/views/Careers.vue';
import Intern from '@/views/Intern.vue';
import ApplyForm from '@/views/ApplyForm.vue';
import OldHome from '@/views/OldHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/capabilities',
    name: 'Capabilities',
    component: Capabilities
  },
  {
    path: '/culture',
    name: 'Culture',
    component: Culture
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/intern',
    name: 'Intern',
    component: Intern
  },
  {
    path: '/apply-form',
    name: 'ApplyForm',
    component: ApplyForm
  },
  {
    path: '/old',
    name: 'OldHome',
    component: OldHome
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
