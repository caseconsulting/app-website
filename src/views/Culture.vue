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

    <h3 class="text-secondary mt-15 mb-7 text-center">CASE Cares in action.</h3>
    <v-carousel style="height: 400px" class="mx-auto mt-12" hide-delimiter-background>
      <v-carousel-item v-for="(item, index) in caseCares" :key="index" :value="index">
        <v-sheet align="center">
          <v-img :src="item.url" height="325px" width="64vw" rounded="xl" cover></v-img>
          <div class="h5 font-emphasis pt-2">{{ item.title }}</div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <iframe
      src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25630086"
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
import Bullet from '../components/shared/Bullet.vue';
import { useDisplay } from 'vuetify';

const { xs, sm, md } = useDisplay();
const techEvents = [
  {
    title: 'Training Resources',
    desc: 'CASE offers a wide range of development tools, including dedicated training budgets and training servers, so employees can build skills and gain hands-on experience.',
    url: '/assets/custom/img/events/case_work_cropped.jpg',
    secondDesc: 'Our training resources include:',
    bullets: ['Agile Coaching Sessions', 'AWS Tech Days', 'Certification Study Groups']
  },
  {
    title: 'Quarterly Tech Talks',
    desc: 'Every quarter, CASE employees come together to highlight the exciting technologies they’re exploring, exchange ideas, and learn from one another.',
    url: '/assets/custom/img/events/case_talk.jpg',
    swap: true
  },
  {
    title: 'Summer Internships',
    desc: 'When capacity allows, CASE hosts summer internship programs designed to mentor and cultivate emerging technical talent.',
    url: '/assets/custom/img/events/case_internship.jpeg'
  }
];
const socialEvents = [
  {
    title: 'Annual Holiday Parties',
    desc: 'Our annual holiday party brings the CASE team together for a night of celebration, laughter, and seasonal cheer.',
    url: '/assets/custom/img/events/case_gala_2025.jpg',
    swap: true
  },
  {
    title: 'Family Picnics',
    desc: 'Each year, CASE hosts a company-wide picnic that brings employees and their families together for a day of food, fun, and community.',
    url: '/assets/custom/img/events/case_pinic.jpg'
  },
  {
    title: 'Case Cares',
    desc: '',
    url: '/assets/custom/img/events/2018_leesburg_race_cropped.jpg',
    swap: true
  }
];
const caseCares = [
  {
    title: 'Helping at Chantilly ReStore',
    url: '/assets/custom/img/casecares/chantilly_restore.jpeg'
  },
  {
    title: 'Organized LGS Read-A-Thon',
    url: '/assets/custom/img/casecares/lgs_read_a_thon.jpeg'
  },
  {
    title: 'Supporting Special Olympics',
    url: '/assets/custom/img/casecares/special_olympics.jpeg'
  },
  {
    title: 'Packing up the Hovatter Elementry School Book Fair',
    url: '/assets/custom/img/casecares/packing_up_the_book_fair.jpeg'
  },
  {
    title: 'Friends of the Reston Regional Library Book Sale',
    url: '/assets/custom/img/casecares/library_book_sale.jpeg'
  },
  {
    title: 'Wreaths Across America',
    url: '/assets/custom/img/casecares/wreath_ascross_america.jpeg'
  },
  {
    title: 'Brass Ensemble Concert for Nursing Home Residents',
    url: '/assets/custom/img/casecares/brass_ensemble_concert.jpeg'
  },
  {
    title: 'Distributing Toys for Tots',
    url: '/assets/custom/img/casecares/toys_for_tots.jpg'
  }
];
</script>
