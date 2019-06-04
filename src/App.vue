<template>
  <div id="app">
    <!-- <app-navigation></app-navigation> -->
    <app-header></app-header>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <app-about></app-about>
    <app-benefits></app-benefits>
    <app-careers></app-careers>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Benefits from './components/Benefits';
import Careers from './components/Careers';

export default {
  components: {
    'app-navigation': Navigation,
    'app-header': Header,
    'app-about': About,
    'app-benefits': Benefits,
    'app-careers': Careers
  }
}
</script>
