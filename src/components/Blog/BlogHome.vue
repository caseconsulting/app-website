<template>
  <section id="blogHome">
    <label for="search">Title Search:</label>
    <input type="text" id="title" placeholder="Blog Title" />
    <label for="search">Tag Search:</label>
    <input type="text" id="tag" placeholder="#tags" />

    <!-- Search Bar from https://bootsnipp.com/snippets/GaeQR -->
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" v-model="filterText" placeholder="Search Title..." />
          <button href="#" class="search_icon"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
    <!-- end search bar -->

    <blog-post v-for="post in dataPosts" :key="post.title" :post="post"></blog-post>
  </section>
</template>

<script>
import dataPosts from '../../data/BlogPosts.js';
import blogPost from './BlogPost.vue';

export default {
  data: function() {
    return {
      dataPosts: dataPosts,
      filterText: ''
    };
  },
  components: {
    'blog-post': blogPost
  },
  methods: {
    find: (items, text) => {
      text = text.split(' ');
      return items.filter(function(item) {
        return text.every(function(el) {
          return item.content.indexOf(el) > -1;
        });
      });
    }
  },
  computed: {
    filteredPosts() {
      return this.dataPosts.filter(element => {
        return element.Title(this.filterText);
      });
    }
  }
};
</script>

<style>
.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #353b48;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  width: 400px;
  caret-color: red;
}

.search_icon {
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: white;
  color: #e74c3c;
}
</style>
