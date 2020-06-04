<template>
  <div>
    <Header />
    <section id="bp" class="postPage">
      <div class="w3-display-container">
        <h1 class="title">{{ $page.frontmatter.title }}</h1>
        <img
          class="mainImage"
          v-if="$page.frontmatter.postImage"
          :src="$withBase($page.frontmatter.postImage)"
        />
      </div>
      <div class="content">
        <p class="meta" style="font-size: 15px; padding-top: 5px;">
          <br />
          <a>{{ getTopic($page.path) }}</a>
          <br />By
          <a style="color: tomato;">{{ $page.frontmatter.author }}</a>
          ◆
          {{ $page.frontmatter.date.slice(0, 8) }}
          <!-- <a style="float: right">{{ getTopic($page.path) }}</a> -->
        </p>
        <p>
          <Content class="link" />
        </p>
        <TagLinks class="links" />
        <br />
      </div>
      <ShareButtons :pageTitle="$page.frontmatter.title"></ShareButtons>
      <br />

      <!-- navigation arrows -->
      <div class="arrow-nav">
        <div class="row">
          <div class="col left" @click="nav('back')">
            <form action class="nav-form">
              <div class="form-group">
                <span class="glyphicon glyphicon-circle-arrow-left form-control-feedback"></span>
                <p class="form-control">{{ getPost('back').title }}</p>
              </div>
            </form>
          </div>

          <div class="col right" @click="nav('next')">
            <form action class="nav-form">
              <div class="form-group">
                <p class="form-control">{{ getPost('next').title }}</p>
                <span class="glyphicon glyphicon-circle-arrow-right form-control-feedback"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end navigation arrows -->
      <br />
    </section>
  </div>
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
    case 'case-news':
      return 'Case News';
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
  },
  mounted() {
    // JS Global Compulsory
    let jQueryScript = document.createElement('script');
    jQueryScript.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js');
    jQueryScript.setAttribute('integrity', 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=');
    jQueryScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(jQueryScript);

    // bootstrap
    let bootstrapLink = document.createElement('link');
    bootstrapLink.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    bootstrapLink.setAttribute('rel', 'stylesheet');
    bootstrapLink.setAttribute('integrity', 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    bootstrapLink.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrapLink);
  }
};
</script>
