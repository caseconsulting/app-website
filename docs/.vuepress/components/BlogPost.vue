<template>
  <section>
    <div class="w3-display-container">
      <div class="w3-display-container ">
        <h2 class="title">{{ $page.frontmatter.title }}</h2>
        <img class="mainImage" v-if="$page.frontmatter.postImage" :src="$withBase($page.frontmatter.postImage)" />
      </div>
      <div class="content">
        <p class="meta" style="font-size: 15px; padding-top: 5px;">
          <br />
          <a>{{ getTopic($page.path) }}</a>
          <br />
          By
          <a style="color: tomato;">{{ $page.frontmatter.author }}</a> ◆
          {{ $page.frontmatter.date.slice(0, 8) }}
          <!-- <a style="float: right">{{ getTopic($page.path) }}</a> -->
        </p>
        <p><slot class="link"></slot></p>
        <TagLinks class="links" />
        <br />
      </div>
      <ShareButtons :pageTitle="$page.frontmatter.title"></ShareButtons>
      <br />
      <!-- <div style="border-top: 2px solid gray;"></div> -->
      <!-- <br /> -->
      <div class="postArrowNav">
        <div class="left" @click="nav('back')">{{ getPost('back').title }}</div>
        <div class="right" @click="nav('next')">
          {{ getPost('next').title }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * Computes x mod n
 * x arbitrary integer
 * n natural number
 */
const mod = (x, n) => ((x % n) + n) % n;

function getTopic(path) {
  let topic = path.split('/');
  switch (topic[1]) {
    case 'case-cares':
      return 'Case Cares';
    case 'new-hires':
      return 'New Hires';
    case 'awards':
      return 'Awards';
    default:
      return 'Topic Not Found';
  }
}

function getPost(direction) {
  let currentPage = this.page ? this.page : this.$page.path;
  let posts = this.$site.pages
    .filter(x => {
      // filter by topic
      return x.path.match(new RegExp(`(/)(?=.*html)`));
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

  for (var i = 0; i < posts.length; i++) {
    if (posts[i].regularPath === this.$page.path) {
      if (direction === 'next') {
        return posts[mod(i + 1, posts.length)];
      } else if (direction === 'back') {
        return posts[mod(i - 1, posts.length)];
      }
    }
  }
}

function nav(direction) {
  if (direction === 'next' || direction === 'back') this.$router.push(this.getPost(direction).regularPath);
}

export default {
  props: ['posts'],
  methods: {
    getTopic,
    getPost,
    nav
  }
};
</script>

<style>
.postArrowNav div {
  margin-bottom: 30px;
  display: inline-block;
  text-align: center;
  width: 150px;
  border: 1px solid gray;
}

.postArrowNav div:hover {
  text-decoration: underline;
}

.right {
  float: right;
}
</style>
