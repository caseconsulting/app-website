<template>
  <!-- Navigation -->
  <div>
    <nav class="navbar navbar-expand-lg g-py-0">
      <div class="container-fluid justify-content-between g-pos-rel">
        <!-- Logo -->
        <div class="js-scroll-nav">
          <span class="nav-item">
            <a href="#promoSlider" class="navbar-brand u-header__logo nav-link">
              <img
                class="u-header__logo-img u-header__logo-img--main g-width-110"
                src="/assets/custom/img/case/logo-banner.gif"
                alt="CASE"
              />
            </a>
          </span>
        </div>
        <!-- End Logo -->

        <!-- Navigation -->
        <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
          <ul
            class="js-scroll-nav navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
          >
            <li class="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg active">
              <a href="#about" class="nav-link p-0">About</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#benefits" class="nav-link p-0">Benefits</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#careers" class="nav-link p-0">Careers</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#intern" class="nav-link p-0">Internship</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#awards" class="nav-link p-0">Awards</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#events" class="nav-link p-0">Events</a>
            </li>
            <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#contact" class="nav-link p-0">Contact</a>
            </li>
          </ul>
        </div>
        <div class="bptw">
          <a class="navbar-brand u-header__log">
            <img :src="bptw_logo" alt="Best places to work 2022 Logo" class="nav-pad" />
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
  <!-- End Navigation -->
</template>

<script>
import vars from '@/shared/constants.js';

export default {
  data() {
    return {
      bptw_logo: vars.BPTW_LOGO
    };
  }
};
</script>
