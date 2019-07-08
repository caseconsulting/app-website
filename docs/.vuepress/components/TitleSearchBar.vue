<template>
  <div>
    <div style="padding-right: 20px; padding-bottom: 10px; padding-top: 0px;">
      <div>
        <div id="demo-2" class="searchContainer dropdown">
          <input
            id="myInput"
            class="textInput searchBox navbar-nav g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
            type="text"
            autoComplete="off"
            @keyup="
              filterFunction();
              showDropdown();
            "
            @keyup.enter="
              filterEnter();
              noShowDropdown();
            "
            v-model="titleText"
          />
        </div>
        <div id="myDropdown" class="dropdown-content">
          <a v-for="post in posts" @click="">{{ post.frontmatter.title }} </a>
          <a @click="titleText = ''">NO RESULTS</a>
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
      // if (this.titleText.trim() !== '') {
      //   this.$router.push(`#title#${this.titleText.toLowerCase()}`);
      // } else {
      //   this.$router.push(`#home`);
      // }
    },
    filterFunction() {
      var input, filter, ul, li, a, i, div, txtValue, count;
      input = this.titleText;
      if (input) {
        filter = input.toUpperCase();
      } else {
        filter = '';
      }
      div = document.getElementById('myDropdown');
      a = div.getElementsByTagName('a');
      count = 0;
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue != 'NO RESULTS') {
          a[i].style.display = '';
          count++;
        } else {
          a[i].style.display = 'none';
        }
      }
      // Displaying NO RESULTS
      if (count == 0) {
        a[a.length - 1].style.display = ''; //since the last <a></a> in the array is NO RESULTS
      } else {
        a[a.length - 1].style.display = 'none';
      }
      return input;
    },
    goToPage(path) {
      this.noShowDropdown();
      this.$router.push(`${path}`);
      this.titleText = '';
    },
    showDropdown() {
      document.getElementById('myDropdown').classList.add('show');
    },
    noShowDropdown() {
      document.getElementById('myDropdown').classList.remove('show');
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
  },
  mounted() {
    // $(window).click(function() {
    //   document.getElementById('myDropdown').classList.remove('show');
    // });
    // $('#myInput').click(function(event) {
    //   event.stopPropagation();
    // });
  }
};
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 6px 10px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

.list-group {
  max-height: 300px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.searchContainer {
  width: 250px;
  display: inline-flex;
  flex: 1 1 300px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

/* search icon disapear header */

input[type='text'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-calendar-picker-indicator {
  display: none;
}
input::-webkit-search-results-button {
  display: none;
}

input[type='text'] {
  background: transparent url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  border: none;
  padding: 9px 10px 8px 32px;
  /* width: 100%; */

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='text']:focus {
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
#demo-2 input[type='text'] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-2 input[type='text']:hover {
  background-color: #fff;
}
#demo-2 input[type='text']:focus {
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