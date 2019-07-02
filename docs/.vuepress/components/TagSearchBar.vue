<template>
  <div style="padding-top: 20px">
    <!-- style is temporary fix to see title -->
    <input type="text" @keydown.enter="setFilter()" v-model="tagText" placeholder="Search By Tag..." /></div
></template>

<script>
export default {
  data: function() {
    return {
      tagText: ''
    };
  },
  methods: {
    setFilter() {
      if (this.tagText.trim() !== '') {
        this.$router.push(`#tag#${this.tagText}`);
      } else {
        this.$router.push(`#home`);
      }
      this.tagText = '';
    }
  }
};
</script>
