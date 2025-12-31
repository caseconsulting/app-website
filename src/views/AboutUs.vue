<template>
  <div class="mb-6">
    <title-header main="true">
      <template #title>We've worked hard to get where we are today.</template>
    </title-header>
    <history class="mb-8" />
    <v-container>
      <timeline class="mb-8" />
      <title-header class="mb-6">
        <template #title>Meet our leadership.</template>
        <template #desc>
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
              cols="12"
              sm="5"
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
import TitleHeader from '@/components/shared/TitleHeader.vue';
import Timeline from '@/components/about-us/Timeline.vue';

const ceo = {
  name: 'Paul Farmer',
  title: 'Chief Executive Officer',
  founder: 'CASE Founder',
  bio: 'Paul Farmer founded Case Consulting in 2012 with a straightforward mission: build a company where talented engineers could do meaningful work and deliver for customers without layers of bureaucracy. Under his leadership, the company has grown from a small consulting shop into the broader CASE platform, expanding through multiple acquisitions and a unified culture centered on people, performance, and long-term vision.',
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
    image: '/assets/custom/img/leadership/ethan_grambow.jpg',
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
