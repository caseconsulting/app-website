<template>
  <div id="app">
    <!-- <app-navigation></app-navigation> -->
    <app-header></app-header>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Header from './components/Header';
export default {
  components: {
    'app-navigation': Navigation,
    'app-header': Header
  }
}
</script>



