<template>
  <div>
    <app-home-redesign></app-home-redesign>
  </div>
</template>

<script>
import HomeRedesign from '@/components/redesign/Home.vue';
export default {
  name: 'Redesign',
  components: {
    appHomeRedesign: HomeRedesign
  },

  created() {
    window.onpopstate = function () {
      history.replaceState(null, '/redesign', '/redesign');
    };
  }
};
</script>
