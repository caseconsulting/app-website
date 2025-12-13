<template>
  <div :class="main ? 'text-center main pt-10 pb-9' : 'text-center'">
    <h2 class="subtitle text-primary font-emphasis"><slot name="title"></slot></h2>
    <v-divider
      v-if="!main"
      thickness="6"
      class="bg-tertiary border-opacity-75 mt-4 mb-7 mx-auto"
      style="max-width: 200px"
    />
    <v-container class="pt-0 h5"><slot name="desc"></slot></v-container>
  </div>
</template>

<script setup>
defineProps(['main']);
</script>

<style scoped>
.v-container {
  font-size: 1.25rem;
}
.subtitle {
  font-size: 2.25rem;
  max-width: 68%;
  margin: auto;
}
.main {
  background-image: url('../../public/assets/custom/img/seigaiha.png');
  background-repeat: repeat;
}
</style>
