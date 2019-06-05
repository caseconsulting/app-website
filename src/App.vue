<template>
  <div id="app">
    <!-- <app-navigation></app-navigation> -->
    <app-header></app-header>
    <app-introSlide></app-introSlide>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <app-about></app-about>
    <app-benefits></app-benefits>
    <app-careers></app-careers>
    <app-internship></app-internship>
    <app-numbers></app-numbers>
    <app-awards></app-awards>
    <app-events></app-events>
    <app-contact></app-contact>
  </div>
</template>

<script>
import Header from './components/Header';
import IntroSlide from './components/IntroSlide';
import About from './components/About';
import Benefits from './components/Benefits';
import Careers from './components/Careers';
import Internship from './components/Internship';
import Numbers from './components/Numbers';
import Awards from './components/Awards';
import Events from './components/Events';
import Contact from './components/Contact';

export default {
  components: {
    'app-header': Header,
    'app-introSlide': IntroSlide,
    'app-about': About,
    'app-benefits': Benefits,
    'app-careers': Careers, 
    'app-internship': Internship,
    'app-numbers': Numbers,
    'app-awards': Awards,
    'app-events': Events,
    'app-contact': Contact
  }
}
</script>
