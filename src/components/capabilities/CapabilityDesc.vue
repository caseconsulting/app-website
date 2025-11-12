<template>
  <div>
    <v-row justify="center">
      <h3 class="text-center text-secondary mb-4"><slot name="header"></slot></h3>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <div class="text-center h5 font-emphasis"><slot name="name"></slot></div>
        <v-img min-width="300px" height="100px" :src="url" alt="" />
      </v-col>
      <v-col class="pt-10">
        <slot name="desc"></slot>
      </v-col>
    </v-row>
    <v-divider
      v-if="!last"
      thickness="6"
      class="bg-tertiary border-opacity-75 mt-6 mb-12 mx-auto"
      style="max-width: 125px"
    />
  </div>
</template>

<script setup>
defineProps(['url', 'last']);
</script>
