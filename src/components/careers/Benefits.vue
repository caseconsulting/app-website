<template>
  <div class="text-center">
    <title-header>
      <template #title>There are many benefits for working at CASE.</template>
      <template #desc>
        CASE recognizes that employees are its number one asset, so we offer a salary and benefits package that will
        treat you right.
      </template>
    </title-header>

    <!-- Benefits grid -->
    <v-row class="mt-8 justify-center text-left" :style="xs ? { margin: '0 16px' } : { margin: '0 200px' }">
      <v-col cols="12" md="6">
        <div v-for="(s, i) in sectionsLeft" :key="'L' + i" class="d-flex align-start mb-8">
          <v-icon :icon="s.icon" size="36" class="text-primary mr-3" />
          <div>
            <div class="text-secondary font-weight-bold mb-2">{{ s.title }}</div>
            <div v-for="(item, j) in s.items" :key="j" class="d-flex mb-1">
              <bullet>{{ item }}</bullet>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-divider v-if="!xs" />
        <div v-for="(s, i) in sectionsRight" :key="'R' + i" class="d-flex align-start mb-8">
          <v-icon :icon="s.icon" size="36" class="text-primary mr-3" />
          <div>
            <div class="text-secondary font-weight-bold mb-2">{{ s.title }}</div>
            <div v-for="(item, j) in s.items" :key="j" class="d-flex mb-1">
              <bullet>{{ item }}</bullet>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';
import TitleHeader from '@/components/shared/TitleHeader.vue';
import Bullet from '@/components/shared/Bullet.vue';
const { xs } = useDisplay();

const sectionsLeft = [
  {
    title: 'Retirement',
    icon: 'mdi-piggy-bank-outline',
    items: [
      'Company contribution always made each pay period',
      'Plan provider Fidelity offers both a traditional and Roth 401k option',
      'Employees are immediately fully vested day one'
    ]
  },
  {
    title: 'Time Off',
    icon: 'mdi-clock-outline',
    items: [
      'Competitive paid time off to include vacation, holidays, training and volunteer time',
      'One additional week of absence with every 5 year anniversary'
    ]
  },
  {
    title: 'Bonuses',
    icon: 'mdi-cash-multiple',
    items: [
      '$10,000 referral bonus for fully-cleared candidates',
      'Spot bonuses for employee accomplishments',
      'High 5 bonuses for colleague recognitions'
    ]
  }
];

const sectionsRight = [
  {
    title: 'Healthcare',
    icon: 'mdi-heart-pulse',
    items: [
      'Full Medical, Dental, and Vision insurance coverage (company paid premiums)',
      'Health Savings Account (HSA) and Flexible Spending Account (FSA) options',
      'Short Term Disability, Long Term Disability, and Life Insurance',
      'Dependent Care Account providing tax-deferred savings for child care'
    ]
  },
  {
    title: 'Professional Development',
    icon: 'mdi-school-outline',
    items: [
      'CASE provides a training budget for all employees',
      'This budget covers certifications, online trainings, conferences, books, etc.',
      'PTO for professional development is also made available to employees'
    ]
  }
];
</script>
