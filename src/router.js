import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';
import Capabilities from '@/views/Capabilities.vue';
import Culture from '@/views/Culture.vue';
import Careers from '@/views/Careers.vue';
import ApplyForm from '@/views/ApplyForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/capabilities',
    name: 'capabilities',
    component: Capabilities
  },
  {
    path: '/culture',
    name: 'culture',
    component: Culture
  },
  {
    path: '/careers',
    name: 'careers',
    component: Careers
  },
  {
    path: '/apply-form',
    name: 'applyForm',
    component: ApplyForm
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
