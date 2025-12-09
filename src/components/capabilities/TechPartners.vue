<template>
  <div>
    <h3 class="text-secondary mb-5">Technology Partners that Empower Innovation</h3>
    <p class="mb-8">
      CASE leverages strategic partnerships with industry-leading technology providers to deliver cutting-edge
      solutions. Our certified expertise and deep integrations mean you benefit from proven platforms and accelerated
      innovation—without reinventing the wheel.
    </p>

    <!-- Featured Partners -->
    <v-row class="mb-8 align-center">
      <v-col cols="12" md="4" class="d-flex justify-center align-center">
        <v-img src="/assets/custom/img/awards/aws-partner-advanced.png" max-width="15em" contain />
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <div>
          <h4 class="text-h6 mb-2">Amazon Web Services</h4>
          <p>
            As an AWS Advanced Tier Services Partner, we bring deep expertise across cloud architecture, migration, and
            DevOps. Our team holds dozens of AWS certifications, ensuring your solutions are built on best practices and
            AWS-validated patterns.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Additional Partners -->
    <p class="mb-6">
      Beyond AWS, we maintain active partnerships and certifications across the modern technology ecosystem—empowering
      us to architect solutions that integrate seamlessly with your existing tools and workflows.
    </p>

    <v-row class="justify-center">
      <v-col
        v-for="partner in additionalPartners"
        :key="partner.name"
        cols="6"
        sm="2"
        class="d-flex flex-column align-center text-center"
      >
        <v-avatar size="80" class="mb-2">
          <v-img :src="partner.image" max-width="10em" contain />
        </v-avatar>
        <span class="text-body-2 font-weight-medium">{{ partner.name }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const additionalPartners = ref([
  { name: 'Google Cloud', image: '/assets/custom/img/stats/partners/google_cloud_partner.png' },
  { name: 'Kovr.ai', image: '/assets/custom/img/stats/partners/kovr-ai.png' },
  { name: 'ServiceNow', image: '/assets/custom/img/stats/partners/servicenow.png' },
  { name: 'Snowflake', image: '/assets/custom/img/stats/partners/snowflake.png' },
  { name: 'Chainguard', image: '/assets/custom/img/stats/partners/chainguard.jpg' }
]);
</script>
