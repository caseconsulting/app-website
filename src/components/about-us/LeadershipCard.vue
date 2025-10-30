<template>
  <div>
    <v-img class="rounded" height="150px" min-width="150px" :src="person.image" :alt="'Picture of ' + person.name" />
    <v-row class="pt-4">
      <span class="text-primary h5 font-emphasis">{{ person.name }}</span>
      <a :href="person.linkedin" target="_blank">
        <v-icon class="fab fa-linkedin icon_link ml-2" size="small"></v-icon>
      </a>
    </v-row>
    <v-row v-if="person.founder">
      <div class="text-tertiary font-weight-bold">{{ person.founder }}</div>
    </v-row>
    <v-row>
      <div class="text-tertiary">{{ person.title }}</div>
    </v-row>
    <v-row v-if="person.subtitle">
      <div class="text-tertiary">{{ person.subtitle }}</div>
    </v-row>
  </div>
</template>

<script setup>
defineProps(['person']);
</script>
