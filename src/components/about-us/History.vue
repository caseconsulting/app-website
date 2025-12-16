<template>
  <div>
    <display-row
      v-for="(item, index) in history"
      :key="index"
      :value="index"
      :url="item.url"
      :alt="item.alt"
      :swap="item.swap"
    >
      <template #title>
        <div class="text-secondary">{{ item.title }}</div>
      </template>
      <template #desc>
        <div class="h5">{{ item.desc }}</div>
      </template>
    </display-row>
  </div>
</template>

<script setup>
import DisplayRow from '@/components/shared/DisplayRow.vue';

const history = [
  {
    title: 'We started off small...',
    desc: 'CASE started with just a handful of employees, with the goal to make their impact by bringing customers the best products and service they possibly could.',
    url: '/assets/custom/img/events/case_annual_gala_2015.png',
    alt: 'CASE 2015 Annual Gala'
  },
  {
    title: 'But we hit a growth spurt.',
    desc: 'CASE is now a company of over 100+ employees, who can confidently say they meet those goals every single (work) day.',
    url: '/assets/custom/img/events/case_annual_gala_2025.jpg',
    alt: 'CASE 2025 Annual Gala',
    swap: true
  }
];
</script>
