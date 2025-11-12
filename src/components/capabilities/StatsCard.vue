<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="(stat, index) in stats" :key="index">
        <v-card variant="tonal" :class="`bg-${stat.color}`" style="height: 100%">
          <v-card-title class="text-h2">{{ stat.value }}</v-card-title>
          <v-card-text> {{ stat.description }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
  {
    value: '92%',
    description: 'Employees with TS/SCI polygraph clearance',
    color: 'secondary'
  },
  {
    value: '80%',
    description: 'Employees with 15+ years of experience',
    color: 'primary'
  },
  {
    value: '60+',
    description: 'Cloud Certifications',
    color: 'secondary'
  },
  {
    value: '20+',
    description: 'Meritorious Unit Citations',
    color: 'primary'
  },
  {
    value: '1000+',
    description: 'Combined years of IC experience',
    color: 'secondary'
  },
  {
    value: '71%',
    description: 'Retention Rate over 5 Years',
    color: 'primary'
  }
]);
</script>
