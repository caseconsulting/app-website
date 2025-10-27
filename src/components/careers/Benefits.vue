<template>
  <div class="text-center">
    <h3>There are benefits for working at CASE.</h3>
    <v-divider thickness="10" class="bg-primary border-opacity-75 my-3 mx-auto" style="max-width: 200px" />
    <span>
      CASE recognizes that employees are its number one asset, so we offer a salary and benefits package that will treat
      you right.
    </span>

    <!-- Benefits grid -->
    <v-row class="mt-8 justify-center text-left" :style="xs ? { margin: '0 16px' } : { margin: '0 200px' }">
      <v-col cols="12" md="6">
        <div v-for="(s, i) in sectionsLeft" :key="'L' + i" class="d-flex align-start mb-8">
          <v-icon :icon="s.icon" size="36" class="text-primary mr-3" />
          <div>
            <div class="text-secondary font-weight-bold mb-2">{{ s.title }}</div>
            <div v-for="(item, j) in s.items" :key="j" class="d-flex mb-1">
              <v-icon icon="mdi-arrow-right" size="18" class="text-secondary mr-2" />
              <span>{{ item }}</span>
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
              <v-icon icon="mdi-arrow-right" size="18" class="text-secondary mr-2" />
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';
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
