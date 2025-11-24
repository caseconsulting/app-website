<template>
  <div>
    <v-card variant="tonal" :class="`bg-${stat.color} ma-3`" height="180px" width="175px">
      <v-card-title class="text-h2">{{ stat.value }}</v-card-title>
      <v-card-text> {{ stat.description }} </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps(['stat']);
</script>
