<template>
  <section id="blogHome">
    <!-- Search Bar from https://bootsnipp.com/snippets/GaeQR -->
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input
            class="search_input"
            type="text"
            @keydown.enter="filterText = inputedText"
            v-model="inputedText"
            placeholder="Search Title..."
          />
          <button href="#" @click="filterText = inputedText" class="search_icon">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- end search bar -->

    <blog-post v-for="post in filteredPosts" :key="post.title" :post="post"></blog-post>
    <h3 v-if="!filteredPosts.length">No results match search</h3>
  </section>
</template>

<script>
import dataPosts from '../../data/BlogPosts.js';
import blogPost from './BlogPost.vue';

export default {
  data: function() {
    return {
      dataPosts: dataPosts,
      inputedText: '',
      filterText: ''
    };
  },
  components: {
    'blog-post': blogPost
  },
  computed: {
    filteredPosts() {
      let f = this.filterText;
      let text = f.toLowerCase().split(' ');
      return dataPosts.filter(function(item) {
        return text.every(function(el) {
          return item.title.toLowerCase().indexOf(el) > -1;
        });
      });
    }
  },
  watch: {
    inputedText: function() {
      if (!this.inputedText.length) {
        this.filterText = '';
      }
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
