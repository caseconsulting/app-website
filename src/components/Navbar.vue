<template>
  <div>
    <v-app-bar :elevation="2" height="100">
      <v-app-bar-title><logo class="pl-6" /></v-app-bar-title>
      <!-- Mobile menu -->
      <template v-if="xs" v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-menu" v-bind="props" color="primary"></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <button-dropdown :items="aboutItems" title="about us" color="primary" block></button-dropdown>
            </v-list-item>
            <v-list-item>
              <v-btn color="primary" to="/capabilities" block>capabilities</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn color="primary" to="/culture" block>culture</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn color="primary" to="/careers" block>careers</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn color="secondary" variant="flat" to="/apply-form" block>apply now</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else v-slot:append>
        <button-dropdown :items="aboutItems" title="about us" color="primary"></button-dropdown>
        <v-btn color="primary" to="capabilities"> capabilities </v-btn>
        <v-btn color="primary" to="culture"> culture </v-btn>
        <v-btn color="primary" to="careers"> careers </v-btn>
        <v-btn color="secondary" variant="flat" class="mr-6" to="apply-form"> apply now </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script setup>
import ButtonDropdown from './ButtonDropdown';
import Logo from './Logo';
import { useDisplay } from 'vuetify';
import { ref } from 'vue';
const { xs } = useDisplay();
const aboutItems = ref([
  { title: 'Our Story', to: '/our-story' },
  { title: 'Leadership', to: '/leadership' },
  { title: 'Partners', to: '/partners' },
  { title: 'Clients', to: '/clients' }
]);
</script>
