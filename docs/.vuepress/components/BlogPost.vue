<template>
  <div>
    <h2 class="title">{{ $page.frontmatter.title }}</h2>
    <img class="mainImage" :src="$withBase($page.frontmatter.image)" />
    <div class="content">
      <p>{{ $page.frontmatter.author }}</p>
      <p>{{ $page.frontmatter.date.slice(0, 8) }}</p>
      <p><slot></slot></p>
      <TagLinks />
      <p class="topic">{{ getTopic($page.path) }}</p>
    </div>
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

<style>
p {
  text-align: justify;
}

.mainImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.content {
  width: 650px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.topic {
  text-align: center;
}
</style>
