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
import Header from './components/home/Header';
import IntroSlide from './components/home/IntroSlide';
import About from './components/home/About';
import Benefits from './components/home/Benefits';
import Careers from './components/home/Careers';
import Internship from './components/home/Internship';
import Numbers from './components/home/Numbers';
import Awards from './components/home/Awards';
import Events from './components/home/Events';
import Contact from './components/home/Contact';

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
