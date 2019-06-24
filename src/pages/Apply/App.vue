<template>
  <div id="app">
    <app-apply v-if="show"></app-apply>
    <app-submit v-else></app-submit>
  </div>
</template>

<script>
import Apply from '@/components/ApplyForm/Form.vue';
import Submit from '@/components/ApplyForm/Submit.vue';
export default {
  name: 'Apply',
  components: {
    appApply: Apply,
    appSubmit: Submit
  },
  data: function() {
    return {
      show: true
    };
  }
};
</script>
