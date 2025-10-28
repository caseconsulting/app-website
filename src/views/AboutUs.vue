<template>
  <div>
    <v-container>
      <subheader class="mb-6">
        <template #title>Meet our leadership.</template>
        <template #description>
          Our leadership team is dedicated to making sure CASE delivers the quality that sets us apart. Connect with
          us on social media and reach out!
        </template>
      </subheader>
      <v-row justify="center">
        <v-col cols="12">
          <leadership-card class="mb-2" :person="ceo" />
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" md="6">
          <leadership-card v-for="(item, index) in leadershipColOne" :key="index" :value="index" :person="item" />
        </v-col>
        <v-col cols="12" md="6">
          <leadership-card v-for="(item, index) in leadershipColTwo" :key="index" :value="index" :person="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import LeadershipCard from '@/components/about-us/LeadershipCard.vue';
import Subheader from '@/components/Subheader';

const ceo = {
  name: 'Paul Farmer',
  title: 'Chief Executive Officer',
  bio: "Here's a blurb about Paul! This should be more in depth than the other leadership team members' cards. This is the spot to let everyone know everything you want to! Brag! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: '/assets/custom/img/6.png',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://www.x.com/',
  linkedin: 'https://www.linkedin.com',
  picWidth: '300px'
};
const leadershipColOne = [
  {
    name: 'Zak Ramsis',
    title: 'Basket Weaver',
    bio: "Here's a blurb about Full Name! I like long walks on the beach and submitting my timecard on time each week.",
    image: '/assets/custom/img/interns/zak.jpg',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.x.com/',
    linkedin: 'https://www.linkedin.com'
  },
  {
    name: 'Full Name',
    title: 'Basket Weaver',
    bio: "Here's a blurb about Full Name! I like long walks on the beach and submitting my timecard on time each week.",
    image: '/assets/custom/img/6.png',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.x.com/',
    linkedin: 'https://www.linkedin.com'
  }
];
const leadershipColTwo = [
  {
    name: 'Helen Dekker',
    title: 'Basket Weaver',
    bio: "Here's a blurb about Full Name! I like long walks on the beach and submitting my timecard on time each week.",
    image: '/assets/custom/img/interns/Helen.jpg',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.x.com/',
    linkedin: 'https://www.linkedin.com'
  },
  {
    name: 'Full Name',
    title: 'Basket Weaver',
    bio: "Here's a blurb about Full Name! I like long walks on the beach and submitting my timecard on time each week.",
    image: '/assets/custom/img/6.png',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.x.com/',
    linkedin: 'https://www.linkedin.com'
  }
];
</script>
