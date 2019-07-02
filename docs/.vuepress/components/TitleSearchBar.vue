<template>
  <div style="padding-top: 20px">
    <!-- style is temporary fix to see title -->
    <input type="text" @keydown.enter="setFilter()" v-model="titleText" placeholder="Search All Titles..." /></div
></template>

<script>
export default {
  data: function() {
    return {
      titleText: ''
    };
  },
  methods: {
    setFilter() {
      if (this.titleText.trim() !== '') {
        this.$router.push(`#title#${this.titleText}`);
      } else {
        this.$router.push(`#home`);
      }
      this.titleText = '';
    }
  }
};
</script>
