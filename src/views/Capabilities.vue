<template>
  <div>
    <div :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 15rem' }">
      <title-header class="mt-12">
        <template #title>Here's our brag corner</template>
        <template #description> </template>
      </title-header>
      <h3 class="text-secondary mb-5">Experts that deliver</h3>
      <v-row justify="space-around">
        <v-col>
          <v-row justify="center" v-for="(stat, index) in statsLeft" :key="index">
            <stats-card :stat="stat" />
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" v-for="(stat, index) in statsRight" :key="index">
            <stats-card :stat="stat" />
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-img class="g-rounded-4" cover height="225px" src="/assets/custom/img/online/developer-min.jpg"></v-img>
          <bullet class="pt-6 pb-6" size="large">Over 1000 combined years of IC experience.</bullet>
          <bullet size="large">Retention rate of 71% over 5 Years.</bullet>
        </v-col>
      </v-row>
      <CertificationsSection class="mt-12" />
    </div>
    <v-img
      height="30em"
      width="100%"
      class="elevation-2 my-12"
      src="/assets/custom/img/events/IMG_20161129_091532386_HDR.jpg"
      cover
      gradient="to top, rgba(0,0,0,.15), rgba(0,0,0,.15)"
    >
    </v-img>

    <div :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 15rem' }">
      <TechPartners />
    </div>
  </div>
</template>

<script setup>
import TitleHeader from '@/components/TitleHeader.vue';
import StatsCard from '@/components/capabilities/StatsCard.vue';
import CertificationsSection from '@/components/capabilities/CertificationsSection.vue';
import TechPartners from '@/components/capabilities/TechPartners.vue';
import Bullet from '@/components/shared/Bullet.vue';
import { useDisplay } from 'vuetify';

const { xs, sm } = useDisplay();
const statsLeft = [
  {
    value: '92%',
    description: 'Employees with TS/SCI polygraph clearance',
    color: 'secondary'
  },
  {
    value: '60+',
    description: 'Cloud Certifications across multiple partners',
    color: 'primary'
  }
];
const statsRight = [
  {
    value: '80%',
    description: 'Employees with 15+ years of experience',
    color: 'primary'
  },
  {
    value: '20+',
    description: 'Meritorious Unit Citations',
    color: 'secondary'
  }
];
</script>
