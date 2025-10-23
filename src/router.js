import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Intern from '@/views/Intern.vue';
import ApplyForm from '@/views/ApplyForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
