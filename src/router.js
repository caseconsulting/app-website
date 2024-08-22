import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const Apply = () => import('@/pages/Apply.vue');
const Intern = () => import('@/pages/Intern.vue');

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
