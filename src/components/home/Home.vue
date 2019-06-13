<template>
  <div id="app">
    <app-introSlide></app-introSlide>
    <app-about></app-about>
    <app-benefits></app-benefits>
    <app-careers></app-careers>
    <app-intern></app-intern>
    <app-numbers></app-numbers>
    <app-awards></app-awards>
    <app-events></app-events>
  </div>
</template>

<script>
import IntroSlide from '../IntroSlide';
import About from './About';
import Benefits from './Benefits';
import Careers from './Careers';
import Internship from './Internship';
import Numbers from './Numbers';
import Awards from './Awards';
import Events from './Events';

export default {
  components: {
    'app-introSlide': IntroSlide,
    'app-about': About,
    'app-benefits': Benefits,
    'app-careers': Careers,
    'app-numbers': Numbers,
    'app-awards': Awards,
    'app-events': Events,
    'app-intern': Internship
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
