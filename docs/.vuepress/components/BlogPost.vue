<template>
  <section>
    <div class="w3-display-container">
      <div class="w3-display-container ">
        <h2 class="title">{{ $page.frontmatter.title }}</h2>
        <img class="mainImage" v-if="$page.frontmatter.postImage" :src="$withBase($page.frontmatter.postImage)" />
      </div>
      <div class="content">
        <p class="meta" style="font-size: 15px; padding-top: 5px;">
          By
          <a style="color: tomato;">{{ $page.frontmatter.author }}</a> ◆
          {{ $page.frontmatter.date.slice(0, 8) }}
        </p>
        <p><slot class="link"></slot></p>
        <TagLinks class="links" />
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
  }
};
</script>
