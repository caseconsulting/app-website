<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="primary">
    <v-row class="d-flex align-center">
      <v-col cols="12" sm="auto">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          :class="`fab ${icon.name} icon_btn`"
          density="compact"
          size="x-large"
          variant="text"
          :href="icon.url"
          target="_blank"
        ></v-btn>
      </v-col>
      <v-col class="text-white h6 mt-2 mr-2" cols="12" sm="auto">
        <i class="fa fa-map-marker-alt"></i>
        Leesburg, VA
      </v-col>
      <v-col class="text-white h6 mt-2" cols="12" sm="auto">
        Contact us at:
        <i class="fa fa-envelope ml-2"></i>
        <a class="g-color-white" href="mailto:info@consultwithcase.com">
          <strong> info@consultwithcase.com</strong>
        </a>
      </v-col>
    </v-row>
    <div class="d-flex ga-3 align-center">© 2025 CASE</div>
  </v-footer>
</template>

<script setup>
const icons = [
  {
    name: 'fa-facebook',
    url: 'https://www.facebook.com/ConsultwithCase/'
  },
  {
    name: 'fa-twitter',
    url: 'https://x.com/consultwithcase'
  },
  {
    name: 'fa-linkedin',
    url: 'https://www.linkedin.com/company/case-llc/'
  },
  {
    name: 'fa-github',
    url: 'https://github.com/caseconsulting'
  }
];
</script>

<style scoped>
.icon_btn:hover,
:focus {
  color: white !important;
}
</style>
