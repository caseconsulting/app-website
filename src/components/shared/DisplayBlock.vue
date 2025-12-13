<template>
  <div>
    <v-row align="center" justify="space">
      <v-col :order="swap ? 2 : 1" align-self="center">
        <v-img cover height="250px" width="98%" rounded="xl" :src="url" alt="" />
      </v-col>
      <v-col :order="swap ? 1 : 2">
        <h3 class="font-emphasis"><slot name="title"></slot></h3>
        <slot name="desc"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps(['url', 'swap']);
</script>
