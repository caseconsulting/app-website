<template>
  <div>
    <v-row justify="space">
      <v-col :order="swap ? 2 : 1" align-self="center">
        <v-img cover height="300px" min-width="150px" max-width="450px" rounded="xl" :src="url" alt="" />
      </v-col>
      <v-col :order="swap ? 1 : 2" class="pt-13">
        <div class="h5 font-emphasis"><slot name="title"></slot></div>
        <slot name="desc"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps(['url', 'swap']);
</script>
