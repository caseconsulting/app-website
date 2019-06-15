<template>
  <section id="testimonials" class="testimonial">
    <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
      <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
        <h2
          class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
          style="margin-top:100px"
        >
          Testimonials
        </h2>
      </div>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="slide in slides"
          :key="slide"
          :class="active(testimonials[slide - 1].first)"
          data-target="#carouselExampleIndicators"
          :data-slide-to="slide"
        ></li>
      </ol>

      <div class="carousel-inner">
        <div v-for="test in testimonials" :key="test" :class="carousel(test.first)" data-interval="10000">
          <div class="container text-center g-max-width-750 g-mb-20 g-pt-10" alt="First slide">
            <div class="container">
              <!--Intern at top of slide -->
              <div class="row">
                <div class="col-md-2" style="text-align:center">
                  <img :src="test.intern1.image" class="rounded-circle potrait test-img" />
                </div>
                <div class="col-md-10">
                  <p class="test-par" style="text-align:justify;">
                    "{{ test.intern1.quote[0] }}"
                    <template>
                      <div style="text-align:right;">- {{ test.intern1.name }}</div>
                    </template>
                  </p>
                </div>
              </div>
              <!--Intern at bottom of slide only displays if second intern is indicated on page -->
              <div v-if="test.intern2" class="row test-row">
                <div class="col-md-10">
                  <p class="test-par" style="text-align:justify;">
                    "{{ test.intern2.quote[0] }}"
                    <template>
                      <div style="text-align:right;">- {{ test.intern2.name }}</div>
                    </template>
                  </p>
                </div>
                <div class="col-md-2 order-md-2" style="text-align:center">
                  <img :src="test.intern2.image" class="rounded-circle potrait test-image" style="text-align:center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span><img src="/assets/custom/img/online/leftArrow.png"/></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span><img src="/assets/custom/img/online/rightARrow.png"/></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
  <!-- End Section Content -->
</template>

<script>
import InternTestimonials from '../../data/InternTestimonials.js';
export default {
  data() {
    return {
      testimonials: InternTestimonials
    };
  },
  computed: {
    slides() {
      return this.testimonials.length;
    }
  },
  methods: {
    active(first) {
      return first ? 'active' : '';
    },
    carousel(first) {
      return first ? 'carousel-item active' : 'carousel-item';
    }
  }
};
</script>

<style scoped>
.carousel {
  height: 600px;
  overflow: hidden;
}
</style>
