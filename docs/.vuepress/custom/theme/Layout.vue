<template>
  <div>
    <Nav />
    <blogNav />
    <Content />
  </div>
</template>

<script>
import Nav from '@theme/components/Nav';
import blogNav from '../components/blogNavigation.vue';
export default {
  components: { Nav, blogNav },
  name: 'Layout'
};
</script>
