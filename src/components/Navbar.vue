<template>
  <v-app-bar :elevation="2" height="100">
    <v-app-bar-title :class="{ 'pl-6': $vuetify.display.smAndUp }"><logo /></v-app-bar-title>
    <template v-slot:append>
      <btn-dropdown class="hidden-md-and-down" :items="tempDropdownItems"> temp </btn-dropdown>
      <v-btn
        v-for="(item, index) in navBtns"
        :key="index"
        :value="index"
        color="primary"
        @click="handleNavigation(item.path)"
        class="hidden-sm-and-down"
      >
        {{ item.title || item.path }}
      </v-btn>
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        color="secondary"
        variant="flat"
        class="mr-6"
        @click="handleNavigation('applyForm')"
      >
        apply now
      </v-btn>
      <div v-else>
        <btn-dropdown :class="$vuetify.display.smAndUp ? 'mr-6' : 'mr-2'" :items="dropdownNav" variant="flat" color="secondary">
          <v-icon class="fas fa-bars"></v-icon>
        </btn-dropdown>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BtnDropdown from '@/components/ButtonDropdown';
import Logo from '@/components/Logo';

const router = useRouter();
const navBtns = [
  { path: 'aboutUs', title: 'About Us' },
  { path: 'capabilities' },
  { path: 'culture' },
  { path: 'careers' }
];
const tempDropdownItems = [{ title: 'Old Home Page', link: 'old' }, { title: 'Option Two' }];
const dropdownNav = [
  {
    title: 'About Us',
    link: 'about-us'
  },
  {
    title: 'Capabilities',
    link: 'capabilities'
  },
  {
    title: 'Culture',
    link: 'culture'
  },
  {
    title: 'Careers',
    link: 'careers'
  },
  {
    title: 'Temp',
    submenu: tempDropdownItems
  },

  {
    title: 'Apply Now',
    link: 'apply-form',
    action: true
  }
];

function handleNavigation(item) {
  router.push({ name: item });
}
</script>
