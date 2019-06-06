<template>
  <div>
    <!-- Section Content -->
    <intern-slider></intern-slider>
    <intern-about></intern-about>
    <intern-requirements></intern-requirements>
    <intern-faq></intern-faq>
    <intern-testimonials></intern-testimonials>
    <contact></contact>
    <!-- End Section Content -->
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import About from "./About.vue";
import Requirements from "./Requirements.vue";
import FAQ from "./FAQ.vue";
import Testimonials from "./Testimonials.vue";
import Contact from "../home/Contact.vue";

export default {
  components: {
    "intern-slider": Slider,
    "intern-about": About,
    "intern-requirements": Requirements,
    "intern-faq": FAQ,
    "intern-testimonials": Testimonials,
    contact: Contact
  }
};
</script>
