<template>
  <div id="app">
    <app-apply></app-apply>
  </div>
</template>

<script>
import Apply from '@/components/ApplyForm/Form.vue';
export default {
  name: 'Apply',
  components: {
    appApply: Apply
  }
};
</script>
