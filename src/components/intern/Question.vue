<template>
  <div class="row">
    <div class="col-sm-10 offset-sm-1 g-mb-40">
      <div class="media">
        <div class="d-flex g-mt-25 g-mr-40">
          <span
            class="d-block g-color-primary g-font-size-48 g-line-height-1"
          ></span>
        </div>
        <div class="media-body align-self-center">
          <h3 class="h5 text-uppercase g-font-weight-800">
            {{ faq.question }}
          </h3>
          <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
            <li class="g-pos-rel g-pl-10 g-mb-15">
              <i
                class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
              ></i>
              <p class="list_elem" v-for="answer in faq.answer">
                {{ answer }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['faq']
};

</script>
