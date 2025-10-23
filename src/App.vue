<template>
  <div id="app">
    <v-app>
      <!-- Router view will render the component matching current route -->
      <app-navbar></app-navbar>
      <router-view class="my-12 mx-24"></router-view>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    'app-navbar': Navbar
  }
};
</script>
