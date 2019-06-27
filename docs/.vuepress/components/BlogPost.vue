<template>
  <div>
    <h2 class="title">{{ $page.frontmatter.title }}</h2>
    <img class="mainImage" v-if="$page.frontmatter.postImage" :src="$withBase($page.frontmatter.postImage)" />

    <div class="content">
      <p>{{ $page.frontmatter.author }}</p>
      <p>{{ $page.frontmatter.date.slice(0, 8) }}</p>
      <p>
        <slot></slot>
      </p>
      <TagLinks />
    </div>
    <br />
    <ShareButtons :pageTitle="$page.frontmatter.title"></ShareButtons>
  </div>
</template>

<script>
export default {
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
