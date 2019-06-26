<template>
  <div class="home">
    <div class="posts" v-if="posts.length">
      <div class="post" v-for="post in posts">
        <div class="w3-display-container">
          <router-link :to="post.path">
            <div class="w3-display-topright w3-display-hover">
              <p>{{ getTopic(post.path) }}</p>
            </div>
            <h2 class="title">{{ post.frontmatter.title }}</h2>
            <p class="meta">
              Posted on {{ post.frontmatter.date.slice(0, 8) }} by
              {{ post.frontmatter.author }}
            </p>
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
      date: ''
    };
  },
  props: ['page'],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          // if (x.frontmatter.tags) {
          //   //  console.log(x.frontmatter.tags.includes('tag1'));
          // }
          // console.log('\n\n\n');
          // console.log(x.path.match(new RegExp(`('/')(?=.*html)`)));
          // console.log(`${currentPage}`)
          // console.log('here');
          // console.log(x.path.match(new RegExp(`(${currentPage})(?=.*html)`)));
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
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
  }
};
</script>
