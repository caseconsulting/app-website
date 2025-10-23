<template>
  <div></div>
</template>

<script>
export default {
  name: 'Home',

  created() {
    window.onpopstate = function () {
      history.replaceState(null, '/', '/');
    };
  }
};
</script>
