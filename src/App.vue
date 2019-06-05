<template>
  <div id="app">

    <router-view></router-view>
    <!-- <app-home></app-home> -->
  </div>
</template>

<script>
  import Home from './components/home/Home.vue';

  export default{
    components: {
      appHome: Home
    }
  }
</script>

