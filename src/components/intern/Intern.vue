<template>
  <div>
    <!-- Header -->
    <header
      id="js-header"
      class="u-header u-header--sticky-top u-header--change-appearance g-z-index-9999"
      data-header-fix-moment="100"
    >
      <div
        class="u-header__section g-bg-white g-transition-0_3 g-py-6 g-py-18--md"
        data-header-fix-moment-exclude="g-py-18--md"
        data-header-fix-moment-classes="u-shadow-v18 g-py-13--md"
      >
        <nav class="navbar navbar-expand-lg g-py-0">
          <div class="container-fluid g-pos-rel">
            <!-- Logo -->
            <a href="./index.html" class="navbar-brand u-header__logo" data-type="static">
              <img
                class="u-header__logo-img u-header__logo-img--main g-width-110"
                src="../../../public/assets/custom/img/case/logo-banner.gif"
                alt="Case Consulting, Inc."
              >
            </a>
            <!-- End Logo -->
            <!-- Navigation -->
            <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
              <ul
                id="js-scroll-nav"
                class="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
              >
                <li class="g-mr-30--lg g-mb-7 g-mb-0--lg active">
                  <a href="/" class="nav-link p-0">Home</a>
                </li>
                <!-- <router-link tag="li" to="/" class="g-mr-30--lg g-mb-7 g-mb-0--lg" active-class="active">
                <a class="nav-link p-0">Home</a>
                </router-link>-->
                <li class="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg active">
                  <a href="#overview" class="nav-link p-0">About</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#requirements" class="nav-link p-0">Requirements</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#faq" class="nav-link p-0">FAQ</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#Testimonial" class="nav-link p-0">Testimonials</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#contact" class="nav-link p-0">Contact</a>
                </li>
              </ul>
              <a class="navbar-brand u-header__log">
                <img
                  src="../../../public/assets/custom/img/awards/2018_BPTW_logo_C1.png"
                  alt="Best places to work 2018 logo"
                  class="nav-pad"
                >
              </a>
            </div>
            <!-- End Navigation -->
            <!-- Responsive Toggle Button -->
            <button
              class="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-20 g-right-0"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <span class="hamburger hamburger--slider">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->
          </div>
        </nav>
      </div>
    </header>

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
