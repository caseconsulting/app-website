<template>
  <!-- FAQ Section Content -->
  <section id="faq" class="g-theme-bg-color-1 no-column-space g-color-white">
    <div class="container-fluid">
      <div class="g-pt-100 g-pb-30">
        <div class="container">
          <div class="row">
            <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
              <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
                <h3
                  class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md g-color-white"
                >
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
          </div>
          <question
            v-for="faqQuestion in faqQuestions"
            :key="faqQuestion.question"
            :faq="faqQuestion"
            :color="color"
          ></question>
        </div>
      </div>
    </div>
    <br />
  </section>
</template>

<script>
import FAQData from '../../data/FAQ.js';
import Question from './Question.vue';

export default {
  data: function () {
    return {
      faqQuestions: FAQData,
      color: 'g-color-white'
    };
  },
  components: {
    question: Question
  }
};
</script>
