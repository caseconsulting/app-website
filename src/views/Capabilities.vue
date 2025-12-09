<template>
  <div class="mb-6">
    <title-header>
      <template #title>CASE's Capabilities</template>
    </title-header>
    <div class="mt-6" :style="xs ? { margin: '0 1rem' } : sm ? { margin: '0 5rem' } : { margin: '0 10rem' }">
      <capability-desc
        v-for="(item, index) in capabilities"
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
      </capability-desc>

      <title-header class="mt-12">
        <template #title>Here's our brag corner</template>
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
          <bullet size="large">Retention rate of 95% over 5 Years.</bullet>
        </v-col>
      </v-row>
      <certifications-section class="mt-12" />
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
import CapabilityDesc from '@/components/capabilities/CapabilityDesc.vue';
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
const capabilities = [
  {
    name: 'Software Delivery',
    desc: 'CASE delivers tailored software solutions across a range of technologies. We can build the custom code to make your low-code/no-code solution work for your mission or we can start from scratch using the latest technologies for application development, with security built-in from the beginning.',
    url: '/assets/custom/img/capabilities/software_development.jpg'
  },
  {
    name: 'Secure Cloud',
    desc: 'CASE delivers tailored software solutions across a range of technologies. We can build the custom code to make your low-code/no-code solution work for your mission or we can start from scratch using the latest technologies for application development, with security built-in from the beginning.',
    url: '/assets/custom/img/capabilities/cloud_engineering.jpg',
    swap: true
  },
  {
    name: 'Cyber',
    desc: 'We implement security from the beginning and shepherd systems through risk management frameworks and authorization and accreditation to achieve compliance. Our team has experience developing secure network and communications solutions to support systems across the world.',
    url: '/assets/custom/img/capabilities/cybersecurity.jpg'
  },
  {
    name: 'Data Insights',
    desc: "CASE's team of data engineers and data scientists deliver solutions to help govern large data sets and extract value leveraging AI/ML and LLM.",
    url: '/assets/custom/img/capabilities/data_ai_ml.jpg',
    swap: true
  },
  {
    name: 'Mission Engineering',
    desc: 'Our project managers and mission support teams help our customers get our technology solutions to the mission on time, every time to give operators the tools they need to do their jobs.',
    url: '/assets/custom/img/capabilities/mission_engineering.jpg'
  },
  {
    name: 'FinTech Solutions',
    desc: 'CASE provides modern financial technology solutions designed to help organizations operate securely, efficiently, and in full compliance. Our team delivers expertise in cryptocurrency ecosystems, blockchain analysis, and advanced fraud detection and avoidance. We also support clients in developing and implementing robust policies, regulatory frameworks, and KYC compliance programs—ensuring mission-critical financial operations remain trusted, transparent, and secure.',
    url: '/assets/custom/img/capabilities/fintech_solutions.jpg',
    swap: true
  }
];
</script>
