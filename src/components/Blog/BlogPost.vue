<template>
  <section id="blogPost">
    <div class="post">
      <div class="title">
        {{ post.title }}
      </div>

      <img class="img" :src="post.image" alt="Alps" />
      <div class="description">
        <div>
          {{ post.description }}
          <strong>[read more]</strong>
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
  width: 600px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.title {
  font-size: 32px;
}

.img {
  max-width: 560px;
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
