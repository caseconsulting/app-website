<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-contact v-if="$route.path === '/' || $route.path === '/intern'"></app-contact>
  </div>
</template>

<script>
import AppHeader from './components/home/Header.vue';
import Contact from './components/home/Contact.vue';

export default {
  components: {
    'app-header': AppHeader,
    'app-contact': Contact
  }
};
</script>
