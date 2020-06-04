<template>
  <div id="app">
    <app-intern></app-intern>
  </div>
</template>

<script>
import Intern from '@/components/intern/Intern.vue';
export default {
  name: 'Intern',
  components: {
    appIntern: Intern
  },
  created() {
    window.onpopstate = function () {
      history.replaceState(null, '/intern', '/intern');
    };
  }
};
</script>
