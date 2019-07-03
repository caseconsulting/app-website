<template>
  <div>
    <div style="padding-right: 20px; padding-bottom: 10px;">
      <!-- style is temporary fix to see title -->
      <!-- <select class="js-example-basic-single" name="state">
        <option v-for="post in posts" :value="post">{{ post }}</option>
      </select> -->
      <div>
        <datalist id="suggestions">
          <option v-for="post in posts">{{ post.frontmatter.title }}</option>
        </datalist>
        <input type="text" autoComplete="on" list="suggestions" @keydown.enter="filterEnter()" v-model="titleText" placeholder="Search">
        </input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titleText: ''
    };
  },
  methods: {
    filterEnter() {
      if (this.titleText.trim() !== '') {
        this.$router.push(`#title#${this.titleText.toLowerCase()}`);
      } else {
        this.$router.push(`#home`);
      }
    }
  },
  computed: {
    posts() {
      // let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages.sort((a, b) => {
        //filter alphabetically
        if (a.frontmatter.title && b.frontmatter.title) {
          if (a.frontmatter.title.toLowerCase() < b.frontmatter.title.toLowerCase()) {
            return -1;
          }
          if (a.frontmatter.title.toLowerCase() > b.frontmatter.title.toLowerCase()) {
            return 1;
          }
        }
        return 0;
      });
      return posts;
    }
  }
};
</script>