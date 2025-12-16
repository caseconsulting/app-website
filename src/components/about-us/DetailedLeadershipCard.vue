<template>
  <div>
    <v-container class="mx-auto">
      <v-row :class="xs ? '' : 'flex-nowrap'" justify="center">
        <v-col class="mr-3" cols="auto" align-self="center">
          <v-img class="rounded" height="200px" min-width="200px" :src="person.image" :alt="'Picture of ' + person.name" />
        </v-col>
        <v-col>
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
          <v-row>{{ person.bio }}</v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();
defineProps(['person']);
</script>

<style scoped>
.name {
  font-size: 1.15rem;
}
</style>
