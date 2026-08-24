<template>
  <div id="app">
    <v-app>
      <!-- Router view will render the component matching current route -->
      <app-navbar></app-navbar>
      <router-view></router-view>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script setup>
import AppNavbar from '@/components/Navbar.vue';
import AppFooter from '@/components/Footer.vue';
</script>
