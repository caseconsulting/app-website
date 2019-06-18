<template>
  <!-- Header -->
  <header
    id="js-header"
    class="u-header u-header--sticky-top u-header--change-appearance g-z-index-9999"
    data-header-fix-moment="100"
  >
    <div
      class="u-header__section g-bg-white g-transition-0_3 g-py-6 g-py-18--md"
      data-header-fix-moment-exclude="g-py-18--md"
      data-header-fix-moment-classes="u-shadow-v18 g-py-13--md"
    >
      <app-home-navigation v-if="$route.path === '/'"></app-home-navigation>
      <app-intern-navigation v-if="$route.path === '/intern'"></app-intern-navigation>
      <app-apply-navigation v-if="$route.path === '/apply-form'"></app-apply-navigation>
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import HomeNavigation from './Navigation';
import InternNavigation from '../intern/Navigation.vue';
import ApplyNavigation from '../ApplyForm/Navigation.vue';

export default {
  components: {
    'app-home-navigation': HomeNavigation,
    'app-intern-navigation': InternNavigation,
    'app-apply-navigation': ApplyNavigation
  }
};
</script>
