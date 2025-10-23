<template>
  <div>
    About Us
    <leadership-card />
  </div>
</template>

<script>
import LeadershipCard from '@/components/about-us/LeadershipCard.vue';
export default {
  name: 'About Us',
  components: {
    'leadership-card': LeadershipCard
  }
};
</script>
