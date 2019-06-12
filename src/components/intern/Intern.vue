<template>
  <div>
    <!-- Section Content -->
    <intern-slider></intern-slider>
    <intern-about></intern-about>
    <intern-requirements></intern-requirements>
    <intern-apply></intern-apply>
    <intern-faq></intern-faq>
    <intern-testimonials></intern-testimonials>
    <!-- End Section Content -->
  </div>
</template>

<script>
import Slider from '../IntroSlide.vue';
import About from './About.vue';
import Requirements from './Requirements.vue';
import InternApply from './InternApply.vue';
import FAQ from './FAQ.vue';
import Testimonials from './Testimonials.vue';

export default {
  components: {
    'intern-slider': Slider,
    'intern-about': About,
    'intern-requirements': Requirements,
    'intern-apply': InternApply,
    'intern-faq': FAQ,
    'intern-testimonials': Testimonials
  }
};
</script>
