<template>
  <div>
    <title-header class="mx-2">
      <template #title>Investing in the future by supporting students.</template>
      <template #description>
        CASE holds summer Internships whenever we can to help grow the next generation of technical talent.
      </template>
    </title-header>

    <v-row class="mt-3 justify-center text-left" :style="marginStyle">
      <v-col cols="12" md="6" height="400" class="d-flex align-center justify-center">
        <v-carousel style="width: 400px; height: 400px" class="mx-auto" hide-delimiter-background show-arrows="hover">
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </v-col>

      <v-card variant="tonal" class="px-15 py-5 mt-3 mb-5">
        <span class="text-secondary font-weight-bold mb-2"
          >We aren't currently accepting applications for the Internship, but we will post an update when that
          changes!</span
        >
      </v-card>
    </v-row>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import TitleHeader from '@/components/TitleHeader.vue';
const { xs, mdAndDown } = useDisplay();

const marginStyle = computed(() => {
  if (xs.value) return { margin: '0 16px' };
  if (mdAndDown.value) return { margin: '0 50px' };
  return { margin: '0 300px' };
});
</script>
