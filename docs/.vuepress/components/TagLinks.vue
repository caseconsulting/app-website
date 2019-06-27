<template lang="html">
  <div>
    <div class="tagBar">
      <div class="tagsScroll">
        <!-- show links from md file if no tags prop is binded -->
        <router-link v-if="!tags" v-for="tag in $page.frontmatter.tags" :key="tag" :to="{ path: `/#tag#${tag}` }">
          #{{ tag }}
        </router-link>

        <!-- show links from binded tags prop -->
        <router-link v-if="tags" v-for="tag in tags" :key="tag" :to="{ path: `/#tag#${tag}` }">
          #{{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags']
};
</script>
