<template>
  <div class="theme-container">
    <main class="g-pt-65 g-pt-90--md">
      <Header />
      <section id="bp">
        <div class="row">
          <div class="col-sm-4"><SideBar /></div>

          <div class="col-sm-4"><Content /></div>

          <div class="col-sm-4"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
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
  }
};
</script>
