<template>
  <div id="app">
    <v-app>
      <app-apply :showMe="show" @switched="show = $event" v-if="show"></app-apply>
      <app-submit :showMe="show" @switched="show = $event" v-if="!show"></app-submit>
    </v-app>
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
  data: function () {
    return {
      show: true
    };
  }
};
</script>
