<template>
  <section id="blogPost">
    <div class="post">
      <div class="title">
        {{ post.title }}
      </div>

      <div class="row">
        <div class="pic col-sm-4">
          <img class="img" :src="post.image" alt="post.title" />
        </div>
        <div class="description col-sm-8">
          {{ post.description }}
        </div>
      </div>

      <div class="tagsScroll">
        <a href="#tag" v-for="tag in post.tags" :key="tag.name">#{{ tag.name }}</a>
      </div>
      <div class="footer">
        <div class="date"></div>
        <div class="share"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style>
.post {
  margin: 30px;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.title {
  font-size: 32px;
}

.postBody {
}

.img {
  width: 100%;
}

.description {
  text-align: justify;
}

.readMore {
  font-weight: bold;
}

.tagsScroll {
  overflow: auto;
  white-space: nowrap;
}

.tagsScroll::-webkit-scrollbar {
  display: none;
}

a {
  margin-right: 10px;
  color: #ccc;
}
</style>
