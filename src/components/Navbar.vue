<template>
  <div>
    <v-app-bar :elevation="2" height="100">
      <v-app-bar-title><logo class="pl-6" /></v-app-bar-title>
      <template v-slot:append>
        <btn-dropdown :items="dropdownItems"> temp </btn-dropdown>
        <v-btn v-for="(item, index) in navBtns" :key="index" :value="index" color="primary" @click="handleNavigation(item.path)">
          {{ item.title || item.path }}
        </v-btn>
        <v-btn color="secondary" variant="flat" class="mr-6" @click="handleNavigation('applyForm')"> apply now </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BtnDropdown from '@/components/ButtonDropdown';
import Logo from '@/components/Logo';

// |--------------------------------------------------|
// |                                                  |
// |                      SETUP                       |
// |                                                  |
// |--------------------------------------------------|

const router = useRouter();
const navBtns = [
  { path: 'aboutUs', title: 'About Us' },
  { path: 'capabilities' },
  { path: 'culture' },
  { path: 'careers' }
];
const dropdownItems = [{ title: 'Old Home Page', link: 'old' }];


// |--------------------------------------------------|
// |                                                  |
// |                     METHODS                      |
// |                                                  |
// |--------------------------------------------------|


function handleNavigation(item) {
  router.push({ name: item });
}
</script>
