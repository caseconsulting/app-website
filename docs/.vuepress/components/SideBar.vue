<template>
  <div class="sidenav head" style="background color: white">
    <!-- <div class="row"> -->
    <h1 style="font-weight: bold; font-family: inherit;">Top 5 tags</h1>
    <!-- </div> -->

    <div v-for="(tag, index) in tags.slice(0, 5)">
      <div class="row postTag">
        <div class="number">
          <p>{{ index + 1 }}.</p>
        </div>
        <div class="col">
          <router-link :to="{ path: `/#tag#${tag[0]}` }">
            <div>
              <span style="padding: 6px 90px 6px 16px;">#{{ tag[0] }}</span>
              <span style="font-weight: bold; padding-right: 0px; float: right;">></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="row postTag">
      <div class="number">
        <p>{{ 6 }}.</p>
      </div>
      <div class="col">
        <router-link :to="{ path: `/#tag#tag5` }">
          <div>
            <span style="padding: 6px 90px 6px 16px;">#example</span>
            <span style="font-weight: bold; padding-right: 0px; float: right;">></span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- <div class="row">
      <div class="number"><p>1.</p></div>
      <div class="col">
        <a href="#">#charity</a>
      </div>
      <div class="col">
        <a style=" font-weight: bold; padding-right: 0px; float: right;" href="#">></a>
      </div>
    </div>

    <div class="row">
      <div class="number"><p>2.</p></div>
      <div class="col">
        <a href="#">#schools</a>
      </div>
      <div class="col">
        <a style=" font-weight: bold; padding-right: 0px; float: right;" href="#">></a>
      </div>
    </div>

    <div class="row">
      <div class="number"><p>3.</p></div>
      <div class="col">
        <a href="#">#coding</a>
      </div>
      <div class="col">
        <a style=" font-weight: bold; padding-right: 0px; float: right;" href="#">></a>
      </div>
    </div>

    <div class="row">
      <div class="number"><p>4.</p></div>
      <div class="col">
        <a href="#">#bloodDrive</a>
      </div>
      <div class="col">
        <a style=" font-weight: bold; padding-right: 0px; float: right;" href="#">></a>
      </div>
    </div>

    <div class="row">
      <div class="number"><p>5.</p></div>
      <div class="col">
        <a href="#">#welcomeToCase</a>
      </div>
      <div class="col">
        <a style=" font-weight: bold; padding-right: 0px; float: right;" href="#">></a>
      </div>
    </div> -->
  </div>
  <!-- Content here -->
</template>

<script>
export default {
  data() {
    return {
      date: '',
      filter: []
    };
  },
  props: ['page'],
  methods: {
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
  },
  computed: {
    tags() {
      var mapZ = new Map();
      let posts = this.$site.pages;

      posts.forEach(post => {
        if (post.frontmatter.tags) {
          for (var x = 0; x < post.frontmatter.tags.length; x++) {
            if (!mapZ.has(post.frontmatter.tags[x])) {
              //if not there then set value to zero
              mapZ.set(post.frontmatter.tags[x], 1);
            } else {
              mapZ.set(post.frontmatter.tags[x], mapZ.get(post.frontmatter.tags[x]) + 1);
              //if there set value to val + 1
            }
          }
        }
      });
      const mapSort = [...mapZ.entries()].sort((a, b) => b[1] - a[1]);

      // let tags = [];

      // //gets all tags from posts
      // posts.forEach(post => {
      //   console.log(post.frontmatter.tags);
      //   if (post.frontmatter.tags) {
      //     for (var x = 0; x < post.frontmatter.tags.length; x++) {
      //       if (tags.contains()) tags.push(post.frontmatter.tags[x]);
      //     }
      //   }
      // });

      // //creates a map to sort tags by key (tag name) and value (number of appearances)
      // //value originally set to one
      // var map = new Map();
      // var unique = tags.filter(this.onlyUnique); //gets all unique tags
      // for (let value in unique) {
      //   map.set(unique[value], 0);
      // }

      // //currently for debug purposes creates array with key value pairs to print
      // let array = [];
      // for (var [key, value] of map.entries()) {
      //   array.push({ key, value });
      // }

      return mapSort;
    }
  }
};
</script>

<style scoped>
.sidenav {
  /* height: 100%; Full-height: remove this if you want "auto" height */
  /* width: 13%; */
  /* width: 200px; Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  left: 6%;
  /* background-color: rgb(214, 73, 73); */
  /* right: 0; */
  /* float: right; */

  /* overflow-x: hidden; Disable horizontal scroll */
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}

.postTag {
  /* margin-top: 30px; */
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  background-color: white;
}

/* .sidenav :hover {
  background-color: whitesmoke;
} */

.sidenav .row {
  border-bottom: 2px solid lightgray;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  /* background-color: whitesmoke; */
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: #212529;
  display: block;
  padding-top: 6px;
}

.number {
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  color: #818181;
  display: block;
}

.arrow {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
}

.sidenav h1 {
  padding: 6px 8px 6px 16px;
  padding-bottom: 15px;
  text-decoration: none;
  font-size: 23px;
  color: #212529;
  display: block;
  text-align: center;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.sidenav .number p {
  padding: 9px 10px 9px 14px;
  border: 2px solid lightgray;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  text-decoration: underline;
}

.row:hover > .number p {
  background-color: firebrick;
  color: white;
  border: 2px solid lightgray;
}

/* Style page content */
.main {
  margin-left: 200px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 1000px) {
  .sidenav {
    visibility: hidden;
  }
}

@media screen and (max-width: 750px) {
  .sidenav a {
    font-size: 11px;
  }
}

@media screen and (max-width: 600px) {
  .sidenav a {
    font-size: 10px;
  }
}
</style>

