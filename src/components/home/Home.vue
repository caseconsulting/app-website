<template>
  <div id="app">
    <!-- <app-navigation></app-navigation> -->
    <!-- <app-header></app-header> -->
    <app-introSlide></app-introSlide>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->

    <app-about></app-about>
    <app-benefits></app-benefits>
    <app-careers></app-careers>
    <app-intern></app-intern>
    <app-numbers></app-numbers>
    <app-awards></app-awards>
    <app-events></app-events>
    <app-contact></app-contact>
  </div>
</template>

<script>
import Header from "./Header";
import IntroSlide from "./IntroSlide";
import About from "./About";
import Benefits from "./Benefits";
import Careers from "./Careers";
import Internship from "./Internship";
import Numbers from "./Numbers";
import Awards from "./Awards";
import Events from "./Events";
import Contact from "./Contact";

export default {
  components: {
    "app-header": Header,
    "app-introSlide": IntroSlide,
    "app-about": About,
    "app-benefits": Benefits,
    "app-careers": Careers,
    "app-numbers": Numbers,
    "app-awards": Awards,
    "app-events": Events,
    "app-contact": Contact,
    "app-intern": Internship
  }
};
</script>
