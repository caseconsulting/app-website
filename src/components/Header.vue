<template>
    <!-- Header -->
    <header id="js-header" class="u-header u-header--sticky-top u-header--change-appearance g-z-index-9999" data-header-fix-moment="100">
    <div class="u-header__section g-bg-white g-transition-0_3 g-py-6 g-py-18--md" data-header-fix-moment-exclude="g-py-18--md" data-header-fix-moment-classes="u-shadow-v18 g-py-13--md">
        <app-navigation></app-navigation>
    </div>
    </header>
    <!-- End Header -->
</template>

<script>
import Navigation from './Navigation';

export default {
  components: {
    'app-navigation': Navigation,

  }
}
</script>

