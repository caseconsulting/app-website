import Intern from './components/intern/Intern.vue';
import Home from './components/home/Home.vue';
import ApplyForm from './components/ApplyForm/Form.vue';
import Blog from './components/Blog/BlogHome.vue';
import BlogPost from './components/Blog/BlogPost.vue';

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
  {
    path: '/blog',
    name: 'blog',
    components: {
      default: Blog
    }
  },
  {
    path: '/blogPost',
    name: 'blogPost',
    components: {
      default: BlogPost
    }
  },
  { path: '*', redirect: '/' }
];
