<template>
  <div class="text-section mx-auto">
    <v-img cover class="mx-auto circle-img" height="19rem" width="19rem" :src="url" alt="" />
    <div class="text-section mx-auto text-center">
      <h3 class="font-emphasis mt-5"><slot name="title"></slot></h3>
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(['url', 'swap', 'height']);
</script>

<style scoped>
.text-section {
  width: 19rem;
}
.circle-img {
  border-radius: 50%;
}
</style>
