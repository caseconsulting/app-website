<template>
  <div class="home">
    <SideBar />
    <div class="posts" v-if="posts.length">
      <div class="post" style="width: 110%" v-for="post in posts">
        <div class="w3-display-container">
          <router-link :to="post.path">
            <div class="w3-display-topright w3-display-hover" style="padding-top: 5px;">
              <p>{{ getTopic(post.path) }}</p>
            </div>
            <h2 class="title">{{ post.frontmatter.title }}</h2>
            <div>
              <img
                class="blogImage"
                style="padding-bottom: 5px;"
                v-if="post.frontmatter.image"
                :src="$withBase(post.frontmatter.image)"
                alt
              />
            </div>
            <p class="meta">
              By
              <a style="color: tomato;">{{ post.frontmatter.author }}</a>
              ◆ {{ post.frontmatter.date.slice(0, 8) }}
            </p>
            <p class="description">{{ post.frontmatter.description }}</p>
          </router-link>
          <div class="tagsHome">
            <TagLinks :tags="post.frontmatter.tags"></TagLinks>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>No results match search</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      filter: [],
      orderedPosts: null
    };
  },
  props: ['page'],
  computed: {
    posts() {
      this.filter = this.$route.hash.split('#');
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

          // filter by title
          if (this.filter[1] == 'title') {
            if (x.frontmatter.title) {
              return x.frontmatter.title.toLowerCase().indexOf(this.filter[2]) > -1;
            }
            return false;
          }
        })
        .sort((a, b) => {
          let aa = a.frontmatter.date.split(' ')[0];
          let bb = b.frontmatter.date.split(' ')[0];

          aa = aa.split('-');
          bb = bb.split('-');
          aa = `${aa[2]}.${aa[0]}.${aa[1]}`;
          bb = `${bb[2]}.${bb[0]}.${bb[1]}`;

          return bb > aa ? 1 : bb < aa ? -1 : 0;
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
        case 'case-news':
          return 'Case News';
        default:
          return 'No Topic';
      }
    }
  },
  mounted() {
    let currentPage = this.page ? this.page : this.$page.path;
    let postsStart = this.$site.pages
      .filter(x => {
        // filter by topic
        return x.path.match(new RegExp(`(/)(?=.*html)`));
      })
      .sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      });
    this.orderedPosts = postsStart;
  }
};
</script>

<style>
.blogImage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 300px;
  max-width: 300px;
  border-width: 1px solid black;
}
</style>
