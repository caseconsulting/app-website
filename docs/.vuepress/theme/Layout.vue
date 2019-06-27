<template>
  <div class="theme-container">
    <main class="g-pt-65 g-pt-90--md">
      <Header />
      <section @click="displaySidebar" id="bp">
        <div v-if="sidebar" class="row">
          <div class="col-sm-4"><SideBar /></div>
          <div class="col-sm-4"><Content /></div>
          <div class="col-sm-4"></div>
        </div>
        <div v-else class="row">
          <div class="col-sm-2" style="width: 400px;"></div>
          <div class="col-sm-8"><Content /></div>
          <div class="col-sm-2"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return { sidebar: false };
  },
  methods: {
    displaySidebar() {
      var array = document.URL.split('/');
      console.log(array[array.length - 1] === '');
      return array[array.length - 1] === '';
    }
  },
  mounted() {
    let bootstrapLink = document.createElement('link');
    bootstrapLink.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    bootstrapLink.setAttribute('rel', 'stylesheet');
    bootstrapLink.setAttribute('integrity', 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    bootstrapLink.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrapLink);

    let bootstrapScript = document.createElement('script');
    bootstrapScript.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
    bootstrapScript.setAttribute(
      'integrity',
      'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
    );
    bootstrapScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrapScript);

    this.sidebar = this.displaySidebar();
  }
  // created() {
  //   if (localStorage.getItem('reloaded')) {
  //     // The page was just reloaded. Clear the value from local storage
  //     // so that it will reload the next time this page is visited.
  //     localStorage.removeItem('reloaded');
  //   } else {
  //     // Set a flag so that we know not to reload the page twice.
  //     localStorage.setItem('reloaded', '1');
  //     location.reload();
  //   }
  // }
};
</script>

<style>
.col-sm-3half,
.col-sm-8half {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .col-sm-3half,
  .col-sm-8half {
    float: left;
  }
  .col-sm-3half {
    width: 29.16666667%;
  }
  .col-sm-8half {
    width: 70.83333333%;
  }
}
</style>