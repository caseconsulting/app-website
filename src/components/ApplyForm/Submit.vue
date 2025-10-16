<template>
  <div>
    <form-header></form-header>
    <section id="apply" class="g-theme-bg-gray-light-v1 g-py-50">
      <div class="applyForm container col-sm-8 col-xl-6 col-lg-8 col-xs-9">
        <div
          class="container text-center g-max-width-750 g-mb-20 g-pt-10 g-pb-10"
          style="padding-bottom: 0px !important"
        >
          <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
            <h2 class="u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md">Thank you!</h2>
          </div>
        </div>

        <div class="col submitBox">
          <div class="submitPage">
            <h5>
              We appreciate your interest in CASE
              <br />
              <br />Our team will review your application and contact you shortly. In the meantime, if you have any
              questions you may email
              <a href="mailto:resumes@consultwithcase.com" style="color: #4e4353; text-decoration: underline"
                >resumes@consultwithcase.com</a
              >.
            </h5>
          </div>
        </div>
        <br />
        <div>
          <div class="col-sm-offset-2 col-sm-10">
            <router-link to="/">
              <button type="button" class="btn btn-success" style="opacity: 0.8; color: white">Return to Home</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from '../home/Header.vue';

export default {
  components: {
    formHeader: Header
  }
};
</script>
