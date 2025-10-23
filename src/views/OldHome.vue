<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
import Home from '@/components/oldhome/Home.vue';
export default {
  name: 'Home',
  components: {
    appHome: Home
  },

  created() {
    window.onpushstate = function () {
      history.replaceState(null, '/old', '/old');
    };
  }
};
</script>
