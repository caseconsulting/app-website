<template>
  <div>
    <v-app>
      <app-navbar></app-navbar>
    </v-app>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  components: {
    'app-navbar': Navbar
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
