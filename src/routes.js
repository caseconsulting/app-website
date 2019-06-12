import Intern from './components/intern/Intern.vue';
import Home from './components/home/Home.vue';
import ApplyForm from './components/ApplyForm/Form.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home
    }
  },
  {
    path: '/intern',
    name: 'internship',
    components: {
      default: Intern
    }
  },
  {
    path: '/apply-form',
    name: 'apply',
    components: {
      default: ApplyForm
    }
  },
  { path: '*', redirect: '/' }
];
