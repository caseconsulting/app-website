<template>
  <div>
    <v-app-bar :elevation="2" height='100'>
      <v-app-bar-title><logo class="pl-6" /></v-app-bar-title>
      <template v-slot:append>
        <nav-dropdown :items="items" title='about us' color='primary'></nav-dropdown>
        <v-btn color="primary" v-bind="props"> capabilities </v-btn>
        <v-btn color="primary" v-bind="props"> culture </v-btn>
        <v-btn color="primary" v-bind="props"> careers </v-btn>
        <v-btn color="secondary" variant="flat" v-bind="props"> apply now </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import NavDropdown from './NavDropdown';
import Logo from './Logo';

export default {
  components: {
    'nav-dropdown': NavDropdown,
    'logo': Logo
  },
  data: () => ({
    items: [
      { title: 'Option One' },
      { title: 'Option Two' },
      { title: 'Option Three' },
      { title: 'Option Four' },
    ],
  }),
}
</script>
