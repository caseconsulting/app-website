<template>
  <nav class="navbar navbar-expand-lg g-py-0">
    <div class="container-fluid g-pos-rel">
      <!-- Logo -->
      <a href="/" class="navbar-brand u-header__logo" data-type="static">
        <img
          class="u-header__logo-img u-header__logo-img--main g-width-110"
          src="/assets/img/case/logo-banner.gif"
          alt="Case Consulting, Inc."
        />
      </a>

      <!-- End Logo -->
      <!-- Navigation -->
      <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
        <ul
          id="js-scroll-nav"
          class="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
        >
          <!-- <router-link tag="li" to="/" class="g-mr-30--lg g-mb-7 g-mb-0--lg" active-class="active">
          <a class="nav-link p-0">Home</a>
          </router-link>-->
          <!-- <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg" active-class="active">
            <a href="/">Home</a>
          </li>-->

          <!-- <router-link tag="li" to="/" class="g-mr-30--lg g-mb-7 g-mb-0--lg" active-class="active">
            <a class="nav-link p-0">Home</a>
          </router-link>-->
          <li v-for="section in Sections" :key="section.name" class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
            <a :href="section.ref" class="nav-link p-0">{{ section.name }}</a>
          </li>
        </ul>
        <a class="navbar-brand u-header__log">
          <img src="/assets/img/awards/2019_BPTW_logo.png" alt="Best places to work 2019 logo" class="nav-pad" />
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
</template>

<script>
export default {
  data: function() {
    return {
      Sections: [
        {
          name: 'Home',
          ref: '/#home'
        },
        {
          name: 'Case Cares',
          ref: '/#case-cares'
        },
        {
          name: 'New Hires',
          ref: '/#new-hires'
        },
        {
          name: 'Awards',
          ref: '/#awards'
        }
      ]
    };
  }
};
</script>
