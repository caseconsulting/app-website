import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Apply from '@/pages/Apply.vue';
import Intern from '@/pages/Intern.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apply-form',
      name: 'apply',
      component: Apply
    },
    {
      path: '/intern',
      name: 'intern',
      component: Intern
    }
  ]
});

export default router;
