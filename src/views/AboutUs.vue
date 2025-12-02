<template>
  <div class="mb-6">
    <title-header main="true">
      <template #title>Get to know CASE.</template>
      <template #description>
        Here at CASE, we do a lot of cool stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor,
        diam vel convallis sagittis, enim ante vestibulum sem, sed vehicula ligula risus vel justo.
      </template>
    </title-header>
    <v-container>
      <title-header class="mb-6">
        <template #title>We've worked hard to get where we are today.</template>
      </title-header>
      <history class="mb-8" />
      <timeline class="mb-8" />
      <title-header class="mb-6">
        <template #title>Meet our leadership.</template>
        <template #description>
          Our leadership team is dedicated to making sure CASE delivers the quality that sets us apart. Connect with us
          on social media and reach out!
        </template>
      </title-header>
      <v-row justify="center">
        <v-col cols="11">
          <ceo-card class="mb-2" :person="ceo" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col
              class="d-flex justify-center"
              cols="5"
              md="4"
              v-for="(item, index) in leadershipInfo"
              :key="index"
              :value="index"
            >
              <leadership-card class="pa-2" :person="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import CeoCard from '@/components/about-us/DetailedLeadershipCard.vue';
import LeadershipCard from '@/components/about-us/LeadershipCard.vue';
import History from '@/components/about-us/History.vue';
import TitleHeader from '@/components/TitleHeader.vue';
import Timeline from '@/components/about-us/Timeline.vue';

const ceo = {
  name: 'Paul Farmer',
  title: 'Chief Executive Officer',
  founder: 'CASE Founder',
  bio: "Here's a blurb about Paul! This should be more in depth than the other leadership team members' cards. This is the spot to let everyone know everything you want to! Brag! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: '/assets/custom/img/leadership/paul_farmer.jpeg',
  linkedin: 'https://www.linkedin.com/in/paul-farmer-jr-4aa68b11/'
};
const leadershipInfo = [
  {
    name: 'Amy Farmer',
    title: 'Chief Operations Officer',
    image: '/assets/custom/img/leadership/amy_farmer.jpeg',
    linkedin: 'https://www.linkedin.com/in/amy-farmer-787b255/'
  },
  {
    name: 'Dave Bromberg',
    title: 'Chief Financial Officer',
    image: '/assets/custom/img/leadership/david_bromberg.jpeg',
    linkedin: 'https://www.linkedin.com/in/david-bromberg-b5b02331/ '
  },
  {
    name: 'Bryan Walter',
    title: 'Chief Growth Officer',
    image: '/assets/custom/img/leadership/bwalter.jpg',
    linkedin: 'https://www.linkedin.com/in/bryanjwalter/ '
  },
  {
    name: 'Chris Santiago',
    title: 'Chief Technology Officer',
    subtitle: 'EVP',
    founder: 'Ragnarok Founder',
    image: '/assets/custom/img/leadership/csantiago.jpg',
    linkedin: 'https://www.linkedin.com/in/chris-santiago-4731b69/'
  },
  {
    name: 'Ethan Grambow',
    title: 'Chief Strategy Officer',
    founder: 'Ragnarok Founder',
    image: '/assets/custom/img/leadership/no_linkedin_photo.svg',
    linkedin: 'https://www.linkedin.com/in/ethan-g-6b6024107/'
  },
  {
    name: 'Brandon Lally',
    title: 'Chief Customer Officer',
    founder: 'CyberKinetics Founder',
    image: '/assets/custom/img/leadership/blally.jpg',
    linkedin: 'https://www.linkedin.com/in/brandonlally/'
  }
];
</script>
