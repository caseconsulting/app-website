<template>
  <div class="d-flex mb-1">
    <v-icon icon="mdi-arrow-right" :size="iconSize" class="text-secondary mr-2 mt-1" />
    <span :class="textClass"><slot></slot></span>
  </div>
</template>

<script setup>
const props = defineProps(['size']);
const iconSize = props.size === 'large' ? 24 : 18;
const textClass = props.size === 'large' ? 'h5 font-emphasis' : '';
</script>
