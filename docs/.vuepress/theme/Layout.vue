<template>
  <div class="theme-container">
    <main class="g-pt-65 g-pt-90--md">
      <Header />
      <section id="bp">
        <div v-if="sidebar" class="row">
          <!-- <div class="col-sm-4"><SideBar /></div> -->
          <div class="col-sm-4"></div>
          <div class="col-sm-4" style="min-width: 100%;"><Content /></div>
          <div class="col-sm-4"></div>
        </div>
        <div v-else class="row">
          <div class="col-sm-2"></div>
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
    return {};
  },
  computed: {
    sidebar: {
      get() {
        var array = this.$route.path.split('/');
        return array[array.length - 1] === '';
      },
      set(value) {}
    }
  },
  methods: {
    displaySidebar() {
      var array = document.URL.split('/');
      return array[array.length - 1] === '';
    }
  },
  mounted() {
    // JS Global Compulsory
    let jQueryScript = document.createElement('script');
    jQueryScript.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js');
    jQueryScript.setAttribute('integrity', 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=');
    jQueryScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(jQueryScript);

    // bootstrap
    let bootstrapLink = document.createElement('link');
    bootstrapLink.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    bootstrapLink.setAttribute('rel', 'stylesheet');
    bootstrapLink.setAttribute('integrity', 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    bootstrapLink.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrapLink);

    // expandable arrow button
    let navArrowBS = document.createElement('script');
    navArrowBS.setAttribute('src', '//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js');
    document.head.appendChild(navArrowBS);

    // let jQueryScript2 = document.createElement('script');
    // jQueryScript2.setAttribute('src', 'https://code.jquery.com/jquery-migrate-3.1.0.min.js');
    // jQueryScript2.setAttribute('integrity', 'sha256-ycJeXbll9m7dHKeaPbXBkZH8BuP99SmPm/8q5O+SbBc=');
    // jQueryScript2.setAttribute('crossorigin', 'anonymous');
    // document.head.appendChild(jQueryScript2);

    this.sidebar = this.displaySidebar();
  }
};
</script>

<style scoped>
/* .col-sm-4 {
  min-width: 950%;
} */
</style>
