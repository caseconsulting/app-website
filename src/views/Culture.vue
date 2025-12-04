<template>
  <div class="mt-6" :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 10rem' }">
    <h3 class="text-secondary mb-7 text-center">CASE invests in you as much as you invest in your work.</h3>
    <culture-event
      v-for="(item, index) in techEvents"
      :key="index"
      :value="index"
      :url="item.url"
      :swap="item.swap"
      :last="item.last"
    >
      <template #title>{{ item.title }}</template>
      <template #desc>
        <div class="mb-4">
          {{ item.desc }}
        </div>
        <div v-if="item.secondDesc" class="mb-1">{{ item.secondDesc }}</div>
        <bullet v-for="(bullet, index) in item.bullets" :key="index" :value="index" class="ml-5">
          {{ bullet }}
        </bullet>
      </template>
    </culture-event>
    <h3 class="text-secondary mt-15 mb-7 text-center">And a healthy work life balance is key.</h3>
    <culture-event
      v-for="(item, index) in socialEvents"
      :key="index"
      :value="index"
      :url="item.url"
      :swap="item.swap"
      :last="item.last"
    >
      <template #title>{{ item.title }}</template>
      <template #desc>
        <div class="mb-4">
          {{ item.desc }}
        </div>
      </template>
    </culture-event>
    <!-- <capability-desc
      v-for="(item, index) in socialEvents"
      :key="index"
      :value="index"
      :url="item.url"
      :swap="item.swap"
      :last="item.last"
    >
      <template #name>{{ item.name }}</template>
      <template #desc>
        <div class="mb-4">
          {{ item.desc }}
        </div>
      </template>
    </capability-desc> -->

    <h3 class="text-secondary mt-15 mb-7 text-center">CASE Cares in action.</h3>
    <v-carousel style="height: 400px" class="mx-auto mt-12" hide-delimiter-background>
      <v-carousel-item v-for="(item, index) in socialEvents" :key="index" :value="index">
        <v-sheet align="center">
          <v-img :src="item.url" height="325px" width="64vw" rounded="xl" cover></v-img>
          <div class="h5 font-emphasis pt-2">{{ item.title }}</div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <iframe
      src="https://www.juicer.io/api/feeds/case-llc/iframe"
      frameborder="0"
      :width="xs ? '300px' : sm ? '500px' : md ? '700px' : '1000px'"
      height="700"
      style="display: block; margin: 0 auto"
      class="pb-8"
    ></iframe>
  </div>
</template>

<script setup>
import CultureEvent from '../components/culture/CultureEvent.vue';
// import CapabilityDesc from '../components/capabilities/CapabilityDesc.vue';
import Bullet from '../components/shared/Bullet.vue';
import { useDisplay } from 'vuetify';

const { xs, sm, md } = useDisplay();
const techEvents = [
  {
    title: 'Training Resources',
    desc: 'CASE provides a variety of resources, from training budgets to training servers so employees can get hands on experience.',
    url: '/assets/custom/img/events/case_work_cropped.jpg',
    secondDesc: 'Our training resources include:',
    bullets: ['Agile Coaching Sessions', 'AWS Tech Days', 'Certification Study Groups']
  },
  {
    title: 'Monthly Tech Talks',
    desc: 'At our monthly Tech Talks, CASE employees get to connect and showcase the interesting technology that they work with.',
    url: '/assets/custom/img/events/case_talk.jpg',
    swap: true
  },
  {
    title: 'Summer Internships',
    desc: 'CASE holds summer internships whenever we can to help grow the next generation of technical talent.',
    url: '/assets/custom/img/events/case_internship.jpeg'
  }
];

const socialEvents = [
  {
    title: 'Annual Holiday Parties',
    desc: 'CASE holds summer internships whenever we can to help grow the next generation of technical talent.',
    url: '/assets/custom/img/events/case_gala_2025.jpg',
    swap: true
  },
  {
    title: 'Family Picnics',
    desc: 'CASE holds summer internships whenever we can to help grow the next generation of technical talent.',
    url: '/assets/custom/img/events/case_pinic.jpg'
  },
  {
    title: 'Case Cares',
    desc: 'CASE holds summer internships whenever we can to help grow the next generation of technical talent.',
    url: '/assets/custom/img/events/2018_leesburg_race_cropped.jpg',
    swap: true
  }
];
</script>
