<template lang="html">
  <div>
    <div class="tagBar">
      <div class="tagsScroll">
        <!-- show links from md file if no tags prop is binded (individual posts) -->
        <router-link v-if="!tags" v-for="tag in $page.frontmatter.tags" :key="tag" :to="{ path: `/#tag#${tag}` }">
          #{{ tag }}
        </router-link>

        <!-- show links from binded tags prop (home page) -->
        <router-link
          v-if="tags"
          v-for="tag in tags"
          :key="tag"
          :to="{ path: `/#tag#${tag}` }"
          v-bind:class="[{ tagFocus: isRoute(tag) }]"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  methods: {
    isRoute(tag) {
      this.filter = this.$route.hash.split('#');
      if (this.filter[1] === 'tag') {
        return tag === this.filter[2];
      }
      return false;
    }
  }
};
</script>

<style scoped>
.tagFocus {
  color: gray !important;
}
</style>
