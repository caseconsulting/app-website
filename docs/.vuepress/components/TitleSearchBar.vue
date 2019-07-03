<template>
  <div>
    <head>
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css" rel="stylesheet" />
    </head>
    <div style="padding-right: 20px; padding-bottom: 10px; padding-top: 0px;">
      <div>
        <datalist id="suggestions">
          <option v-for="post in posts" :value="post.frontmatter.title" />
        </datalist>

        <!-- <div>
          <span class="fa fa-search searchIcon"></span>
          <input
            class="textInput searchBox navbar-nav g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
            type="text"
            autoComplete="on"
            list="suggestions"
            @keydown.enter="filterEnter()"
            v-model="titleText"
            placeholder="Search..."
          />

          <input type="submit" value="Search" class="searchButton" @click="filterEnter()" />
        </div> -->

        <div id="demo-2" class="searchContainer">
          <input
            class="textInput searchBox navbar-nav g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
            type="search"
            autoComplete="on"
            list="suggestions"
            @keydown.enter="filterEnter()"
            v-model="titleText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titleText: ''
    };
  },
  methods: {
    filterEnter() {
      if (this.titleText.trim() !== '') {
        this.$router.push(`#title#${this.titleText.toLowerCase()}`);
      } else {
        this.$router.push(`#home`);
      }
    }
  },
  computed: {
    posts() {
      // let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages.sort((a, b) => {
        //filter alphabetically
        if (a.frontmatter.title && b.frontmatter.title) {
          if (a.frontmatter.title.toLowerCase() < b.frontmatter.title.toLowerCase()) {
            return -1;
          }
          if (a.frontmatter.title.toLowerCase() > b.frontmatter.title.toLowerCase()) {
            return 1;
          }
        }
        return 0;
      });
      return posts;
    }
  }
};
</script>

<style scoped>
.searchContainer {
  width: 250px;
  display: inline-flex;
  flex: 1 1 300px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

/* search icon disapear header */

input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type='search'] {
  background: transparent url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  border: none;
  padding: 9px 10px 8px 32px;
  width: 100%;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='search']:focus {
  width: 100%;
  background-color: #fff;
  border-color: black;
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3;
  border-radius: 0.3;
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

/* Demo 2 */
#demo-2 input[type='search'] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-2 input[type='search']:hover {
  background-color: #fff;
}
#demo-2 input[type='search']:focus {
  width: 100%;
  padding-left: 32px;
  padding-top: 32px;
  color: #000;
  background-color: #fff;
  cursor: auto;
}
#demo-2 input:-moz-placeholder {
  color: transparent;
}
#demo-2 input::-webkit-input-placeholder {
  color: transparent;
}
</style>