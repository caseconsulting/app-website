<template>
  <section>
    <div class="w3-display-container ">
      <h1 class="title">{{ $page.frontmatter.title }}</h1>
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
    <!-- <div class="postArrowNav">
      <div class="left" @click="nav('back')">{{ getPost('back').title }}</div>
      <div class="rightArrow" @click="nav('next')">
        <p class="nextTitle">{{ getPost('next').title }}</p>
        <button class="nextIcon">icon</button>
      </div>
    </div> -->

    <!-- test -->
    <div class="arrow-nav">
      <div class="row">
        <div class="col left" @click="nav('back')">
          <form action="" class="nav-form">
            <div class="form-group">
              <span class="glyphicon glyphicon-circle-arrow-left form-control-feedback"></span>
              <p class="form-control">{{ getPost('back').title }}</p>
            </div>
          </form>
        </div>

        <div class="col right" @click="nav('next')">
          <form action="" class="nav-form">
            <div class="form-group">
              <p class="form-control">{{ getPost('next').title }}</p>
              <span class="glyphicon glyphicon-circle-arrow-right form-control-feedback"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end test -->
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
.arrow-nav {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  cursor: pointer;
}

.nav-form .form-group {
  transition: all 0.35s, border-radius 0s;
  width: 0px;
  height: 28px;
  /* background-color: #fff; */
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset; */
  /* border-radius: 25px; */
  /* border: 1px solid #ccc; */
}

.right .nav-form .form-group {
  float: right;
  padding-right: 40px;
}

.left .nav-form .form-group {
  /* margin-left: 40px; */
}

.nav-form .form-group p.form-control {
  /* padding-right: 20px; */
  /* border: 0 none; */
  border: none;
  height: 100%;
  background: transparent;
  box-shadow: none;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  text-align: right;
  color: black;
  display: none;
  /*set to none*/
}

.right .nav-form .form-group p.form-control {
  text-align: right;
}

.left .nav-form .form-group p.form-control {
  text-align: left;
}

.nav-form .form-group p.form-control::-webkit-input-placeholder {
  display: none;
}
.nav-form .form-group p.form-control:-moz-placeholder {
  /* Firefox 18- */
  display: none;
}
.nav-form .form-group p.form-control::-moz-placeholder {
  /* Firefox 19+ */
  display: none;
}
.nav-form .form-group p.form-control:-ms-input-placeholder {
  display: none;
}

.nav-form .form-group:hover,
.nav-form .form-group.hover {
  /* width: 100%; */
  width: 100%;
  /* background-color: green; */
  /* border-radius: 4px 25px 25px 4px; */
}

.right .nav-form .form-group:hover p.form-control,
.right .nav-form .form-group.hover p.form-control {
  /* color: black; */
  display: inline-block;
  padding-right: 0px;
  /* border-radius: 4px 25px 25px 4px; */
}

.left .nav-form .form-group:hover p.form-control,
.left .nav-form .form-group.hover p.form-control {
  /* color: black; */
  display: inline-block;
  padding-left: 40px;
  /* border-radius: 4px 25px 25px 4px; */
}

.nav-form .form-group span.form-control-feedback {
  position: absolute;
  top: 0px;
  display: block;
  color: firebrick;
  font-size: 50px;
}

.right .form-control-feedback {
  right: 16px;
  left: auto;
}

.left .form-control-feedback {
  left: 0px;
  right: auto;
}
</style>
