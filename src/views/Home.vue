<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
import Home from '@/components/home/Home.vue';
export default {
  name: 'Home',
  components: {
    appHome: Home
  },

  created() {
    window.onpushstate = function () {
      history.replaceState(null, '/', '/');
    };
  }
};
</script>
