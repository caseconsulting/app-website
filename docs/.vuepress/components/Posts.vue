<template>
  <div class="home">
    <!-- <SideBar /> -->
    <div class="col-sm-4"><SideBar /></div>

    <div class="posts" v-if="posts.length">
      <div class="post" v-for="post in posts">
        <div class="w3-display-container">
          <router-link :to="post.path">
            <div class="w3-display-topright w3-display-hover">
              <p>{{ getTopic(post.path) }}</p>
            </div>
            <h2 class="title">{{ post.frontmatter.title }}</h2>
            <p class="meta">Posted on {{ post.frontmatter.date.slice(0, 8) }} by {{ post.frontmatter.author }}</p>
            <div>
              <img class="blogImage" v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="" />
            </div>
            <p class="description">{{ post.frontmatter.description }}</p>
          </router-link>
        </div>
        <div class="tagsHome">
          <TagLinks :tags="post.frontmatter.tags"></TagLinks>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      filter: []
    };
  },
  props: ['page'],
  computed: {
    posts() {
      this.filter = this.$route.hash.split('#');
      console.log(this.filter);
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          // filter by topic
          if (this.filter.length <= 2) {
            if (this.filter.length == 1 || this.filter[1] == 'home') {
              return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
            }
            return x.path.match(new RegExp(`(/${this.filter[1]}/)(?=.*html)`));
          }

          // filter by tag
          if (this.filter[1] == 'tag') {
            return x.frontmatter.tags && x.frontmatter.tags.includes(this.filter[2]);
          }
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  },
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
