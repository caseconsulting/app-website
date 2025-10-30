<template>
  <div>
    <div :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 15rem' }">
      <title-header class="mt-12">
        <template #title>Here's our brag corner</template>
        <template #description> </template>
      </title-header>
      <h3 class="text-secondary mb-5">Experts that deliver</h3>
      <v-row>
        <v-col cols="0" md="1"> </v-col>
        <v-col cols="12" md="10">
          <StatsCard />
        </v-col>
        <v-col cols="0" md="1"> </v-col>
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
import { useDisplay } from 'vuetify';
const { xs, sm } = useDisplay();
</script>
