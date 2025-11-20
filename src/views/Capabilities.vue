<template>
  <div>
    <div :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 15rem' }">
      <title-header class="mt-12">
        <template #title>CASE can do a lot of things.</template>
      </title-header>
      <capability-desc
        v-for="(item, index) in capabilities"
        :key="index"
        :value="index"
        :url="item.url"
        :swap="item.swap"
        :last="item.last"
      >
        <template #header>{{ item.header }}</template>
        <template #name>{{ item.name }}</template>
        <template #desc>
          <div class="mb-4">
            {{ item.desc_one }}
          </div>
          <div v-if="item.desc_two" class="mb-4">
            {{ item.desc_two }}
          </div>
        </template>
      </capability-desc>

      <title-header class="mt-12">
        <template #title>Here's our brag corner</template>
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
import CapabilityDesc from '@/components/capabilities/CapabilityDesc.vue';
import { useDisplay } from 'vuetify';
const { xs, sm } = useDisplay();

const capabilities = [
  {
    header: 'We develop quality software that meets and exceeds.',
    name: 'Software Delivery',
    desc_one: 'CASE delivers tailored software solutions across a range of technologies.',
    desc_two:
      'We can build the custom code to make your low-code/no-code solution work for your mission or we can start from scratch using the latest technologies for application development, with security built-in from the beginning.',
    url: '/assets/custom/img/capabilities/software_development.jpg'
  },
  {
    header: 'We know how to keep the cloud airtight.',
    name: 'Secure Cloud',
    desc_one: 'CASE delivers tailored software solutions across a range of technologies.',
    desc_two:
      'We can build the custom code to make your low-code/no-code solution work for your mission or we can start from scratch using the latest technologies for application development, with security built-in from the beginning.',
    url: '/assets/custom/img/capabilities/cloud_engineering.jpg',
    swap: true
  },
  {
    header: 'CASE is at the forefront of security based architecture design.',
    name: 'Cyber',
    desc_one:
      'We implement security from the beginning and shepherd systems through risk management frameworks and authorization and accreditation to achieve compliance. Our team has experience developing secure network and communications solutions to support systems across the world.',
    url: '/assets/custom/img/capabilities/cybersecurity.jpg'
  },
  {
    header: "CASE's data experts can tell you how it is.",
    name: 'Data Insights',
    desc_one:
      "CASE's team of data engineers and data scientists deliver solutions to help govern large data sets and extract value leveraging AI/ML and LLM.",
    url: '/assets/custom/img/capabilities/data_ai_ml.jpg',
    swap: true
  },
  {
    header: 'Everything we do is grounded in the missions we support.',
    name: 'Mission Engineering',
    desc_one:
      'Our project managers and mission support teams help our customers get our technology solutions to the mission on time, every time to give operators the tools they need to do their jobs.',
    url: '/assets/custom/img/capabilities/mission_engineering.jpg'
  },
  {
    name: 'FinTech Solutions',
    desc_one: 'CASE leverages technology solutions for financial problems. Need content on this.',
    url: '/assets/custom/img/capabilities/fintech_solutions.jpg',
    swap: true,
    last: true
  }
];
</script>
