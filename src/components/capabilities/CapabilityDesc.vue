<template>
  <div>
    <v-row justify="center">
      <h3 class="text-center text-secondary mb-4"><slot name="header"></slot></h3>
    </v-row>
    <v-row>
      <v-col :order="swap ? 2 : 1" cols="6">
        <!-- <div class="text-center h5 font-emphasis"><slot name="name"></slot></div> -->
        <v-img class="rounded" min-width="300px" :src="url" alt="" />
      </v-col>
      <v-col :order="swap ? 1 : 2" cols="6" class="pt-10" align-self="center">
        <div class="h5 font-emphasis"><slot name="name"></slot></div>
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
defineProps(['url', 'swap', 'last']);
</script>
