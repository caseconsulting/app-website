<template>
  <span>
    <v-row align="center" no-gutters class="pt-1">
      <v-col cols="6" :order="swap ? 1 : 0">
        <v-img height="23em" width="100%" class="mt-n1" :src="url" :alt="alt ? alt : ''" cover />
      </v-col>
      <v-col />
      <v-col cols="5" class="text-center">
        <div class="h4 font-emphasis"><slot name="title"></slot></div>
        <slot name="desc"></slot>
      </v-col>
      <v-col />
    </v-row>
  </span>
</template>

<script setup>
defineProps(['url', 'alt', 'swap']);
</script>
