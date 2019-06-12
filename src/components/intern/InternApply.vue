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
          <div class="container g-pb-30 col-xl-2">
            <div class="text-center">
              <router-link to="/apply-form" active-class="active" exact>
                <button
                  id="promoSliderLayer7"
                  class="tp-caption NotGeneric-CallToAction rev-btn rs-parallaxlevel-0"
                  style="background-color: #E74C3C ; z-index: 9; font-weight: bold; white-space: nowrap; outline: none; box-shadow: none; box-sizing: border-box; text-transform: uppercase; border-width: 2px;"
                  data-x="['center','center','center','center']"
                  data-y="['middle','middle','middle','middle']"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['134','134','80','65']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                  data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;"
                  data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;"
                  data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1250"
                  data-splitin="none"
                  data-splitout="none"
                  data-actions="[{'event':'click','action':'scrollbelow','offset':'-90px'}]"
                  data-responsive_offset="on"
                  data-responsive="off"
                >Apply Now</button>
              </router-link>
            </div>
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

export default {
  data: function() {
    return {
      applyQuestions: applyData
    };
  },
  components: {
    question: Question
  }
};
</script>
