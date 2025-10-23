<template>
  <div>
    <v-app-bar :elevation="2" height="100">
      <v-app-bar-title><logo class="pl-6" /></v-app-bar-title>
      <template v-slot:append>
        <btn-dropdown :items="items" title="about us" color="primary"></btn-dropdown>
        <v-btn color="primary" v-bind="props"> capabilities </v-btn>
        <v-btn color="primary" v-bind="props"> culture </v-btn>
        <v-btn color="primary" v-bind="props"> careers </v-btn>
        <v-btn color="secondary" variant="flat" v-bind="props" class="mr-6"> apply now </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import ButtonDropdown from './ButtonDropdown';
import Logo from './Logo';

export default {
  components: {
    'btn-dropdown': ButtonDropdown,
    logo: Logo
  },
  data: () => ({
    items: [{ title: 'Option One' }, { title: 'Option Two' }, { title: 'Option Three' }, { title: 'Option Four' }]
  })
};
</script>
