<template>
  <div>
    <v-row no-gutters>
      <v-img
        height="25em"
        width="100%"
        src="/assets/custom/img/online/opening_image.jpg"
        cover
        gradient="to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)"
      >
        <div class="home-title text-h2 text-center text-primary">Delivering excellence<br />for mission.</div>
      </v-img>
    </v-row>
    <display-row v-for="(item, index) in pages" :key="index" :value="index" :url="item.url" :swap="item.swap">
      <template #title>{{ item.title }}</template>
      <template #desc>
        <v-btn color="primary" :to="item.link" class="mt-4">
          {{ item.button }} <v-icon icon="mdi-arrow-right" :size="iconSize" class="ml-1" />
        </v-btn>
      </template>
    </display-row>
  </div>
</template>

<script setup>
import DisplayRow from '@/components/shared/DisplayRow.vue';

const pages = [
  {
    title: 'CASE delivers the high-quality, mission-ready solutions our customers rely on to succeed.',
    url: '/assets/custom/img/events/case_work_cropped.jpg',
    button: 'about us',
    link: 'about-us',
    swap: true
  },
  {
    title: 'At CASE, we dedicate ourselves to honing what we do so we can do it best.',
    url: '/assets/custom/img/online/developer-min.jpg',
    button: 'our capabilities',
    link: 'capabilities'
  },
  {
    title: 'CASE works hard to foster the kind of community that supports employees to flourish in their careers.',
    url: '/assets/custom/img/events/sticky_notes.jpg',
    button: 'our culture',
    link: 'culture',
    swap: true
  },
  {
    title:
      'CASE employees are empowered to excel and provided the support to build rewarding careers.',
    url: '/assets/custom/img/events/case_internship.jpeg',
    button: 'careers at case',
    link: 'careers'
  }
];
</script>

<style scoped>
.home-title {
  margin-top: 2em;
}
.v-btn:hover,
.v-btn:focus {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
