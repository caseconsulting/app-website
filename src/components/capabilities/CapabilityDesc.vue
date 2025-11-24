<template>
  <div>
    <v-row justify="space">
      <v-col :order="swap ? 2 : 1" align-self="center">
        <v-img cover class="rounded" height="300px" min-width="150px" max-width="450px" :src="url" alt="" />
      </v-col>
      <v-col :order="swap ? 1 : 2" class="pt-10" align-self="center">
        <div class="h5 font-emphasis"><slot name="name"></slot></div>
        <slot name="desc"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps(['url', 'swap']);
</script>
