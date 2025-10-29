<template>
  <div>
    <div class="mx-auto">
      <v-img class="rounded" height="150px" :src="person.image" :alt="'Picture of ' + person.name" />
      <span class="text-primary h5 font-emphasis">{{ person.name }}</span>
      <a :href="person.linkedin" target="_blank">
        <v-icon class="fab fa-linkedin ml-2 mt-n1" size="small"></v-icon>
      </a>
      <div class="text-tertiary pb-4">{{ person.title }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['person']);
</script>
