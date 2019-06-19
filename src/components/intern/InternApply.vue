<template>
  <!-- FAQ Section Content -->
  <section id="apply">
    <div class="container-fluid">
      <div class="g-pt-100 g-pb-30">
        <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
          <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
            <h2
              class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
            >Apply</h2>
          </div>
        </div>
        <br>
        <div class="container">
          <question
            v-for="applyQuestion in applyQuestions"
            :key="applyQuestion.question"
            :faq="applyQuestion"
          ></question>
          <apply-button hidden></apply-button>
          <div class="g-font-size-16 text-center">
            <!-- temporary -->
            <strong>Send an email to info@consultwithcase.com to apply!</strong>
          </div>
        </div>
      </div>
    </div>
    <br>
  </section>
</template>

<script>
import applyData from '../../data/InternApply.js';
import Question from './Question.vue';
import ApplyButton from '../ApplyButton.vue';

export default {
  data: function() {
    return {
      applyQuestions: applyData
    };
  },
  components: {
    question: Question,
    applyButton: ApplyButton
  }
};
</script>
