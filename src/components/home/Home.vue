<template>
  <!-- <div id="app"> -->
  <div>
    <app-header></app-header>
    <app-introSlide></app-introSlide>
    <app-about></app-about>
    <app-benefits></app-benefits>
    <app-careers></app-careers>
    <app-intern></app-intern>
    <app-awards></app-awards>
    <!-- <app-numbers></app-numbers> -->
    <app-events></app-events>
    <app-contact></app-contact>
  </div>
</template>

<script>
import IntroSlide from '../IntroSlide';
import About from './About';
import Benefits from './Benefits';
import Careers from './Careers';
import Internship from './Internship';
import Awards from './Awards';
import Events from './Events';
import Header from './Header';
import Contact from './Contact';

export default {
  components: {
    'app-introSlide': IntroSlide,
    'app-about': About,
    'app-benefits': Benefits,
    'app-careers': Careers,
    'app-awards': Awards,
    'app-events': Events,
    'app-intern': Internship,
    'app-header': Header,
    'app-contact': Contact
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
