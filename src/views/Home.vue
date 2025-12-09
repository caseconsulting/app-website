<template>
  <div>
    <v-row no-gutters class="mb-1">
      <v-img
        height="30em"
        width="100%"
        src="/assets/custom/img/online/opening_image.jpg"
        cover
        gradient="to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)"
      >
        <div class="home-title text-h2 text-center text-primary">Delivering excellence<br />for mission.</div>
      </v-img>
    </v-row>
    <v-row align="center" v-for="(item, index) in pages" :key="index" :value="index" no-gutters>
      <v-col cols="6" :order="item.swap ? '1' : '0'">
        <v-img height="20em" width="100%" class="mt-n1" :src="item.image" cover></v-img>
      </v-col>
      <v-col />
      <v-col cols="5" class="text-center">
        <div class="h4 font-emphasis">{{ item.desc }}</div>
        <v-btn color="primary" :to="item.link" class="mt-4">
          {{ item.button }} <v-icon icon="mdi-arrow-right" :size="iconSize" class="ml-1" />
        </v-btn>
      </v-col>
      <v-col />
    </v-row>
  </div>
</template>

<script setup>
const pages = [
  {
    desc: 'thing about us.',
    image: '/assets/custom/img/online/meeting-min.jpg',
    button: 'about us',
    link: 'about-us',
    swap: true
  },
  {
    desc: 'At CASE, we dedicate ourselves to honing what we do so we can do it best.',
    image: '/assets/custom/img/online/developer-min.jpg',
    button: 'our capabilities',
    link: 'capabilities'
  },
  {
    desc: 'CASE works hard to foster the kind of community that supports employees to flourish in their careers.',
    image: '/assets/custom/img/events/IMG_5303.jpg',
    button: 'our culture',
    link: 'culture',
    swap: true
  },
  {
    desc: 'thing about our careers',
    image: '/assets/custom/img/online/working.jpg',
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
