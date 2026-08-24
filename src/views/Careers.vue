<template>
  <span>
    <title-header main="true">
      <template #title>Careers for those who value professionalism, growth, and impact.</template>
    </title-header>
    <job-descriptions class="mt-6" />
    <benefits class="mt-12 mb-3" />
  </span>
</template>

<script setup>
import JobDescriptions from '@/components/careers/JobDescriptions.vue';
import Benefits from '@/components/careers/Benefits.vue';
import TitleHeader from '@/components/shared/TitleHeader.vue';
</script>
