<template>
  <section>
    <meta property="og:url" content="location" />
    <meta property="og:type" content="website" />
    <meta property="og:title" :content="$page.frontmatter.title" />
    <meta property="og:image" content="https://case-blog.netlify.com/assets/img/case/logo-banner.gif" />
    <div class="w3-display-container">
      <div class="w3-display-container ">
        <h2 class="title">{{ $page.frontmatter.title }}</h2>
        <img class="mainImage" v-if="$page.frontmatter.postImage" :src="$withBase($page.frontmatter.postImage)" />
      </div>
      <div class="content">
        <p class="meta" style="font-size: 15px; padding-top: 5px;">
          By
          <a style="color: #0000EE;">{{ $page.frontmatter.author }}</a> ◆
          {{ $page.frontmatter.date.slice(0, 8) }}
        </p>
        <p><slot></slot></p>
        <TagLinks />
        <br />
      </div>
      <ShareButtons :pageTitle="$page.frontmatter.title"></ShareButtons>
      <br />
      <!-- <div style="border-top: 2px solid gray;"></div> -->
      <!-- <br /> -->
    </div>
  </section>
</template>

<script>
export default {
  computed: {},
  methods: {
    getTopic(path) {
      let topic = path.split('/');
      switch (topic[1]) {
        case 'case-cares':
          return 'Case Cares';
        case 'new-hires':
          return 'New Hires';
        case 'awards':
          return 'Awards';
        default:
          return 'No Topic';
      }
    }
  },
  mounted() {
    // if (localStorage) {
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
  }
};
</script>