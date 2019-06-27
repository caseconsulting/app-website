<template>
  <div class="col-sm-4" style="float:center;">
    <div class="sidenav">
      <h1>Top 10 tags</h1>
      <p style="float:left;">1.</p>
      <a href="#">Tag1</a>
      <a href="#">Tag2</a>
      <a href="#">Tag3</a>
      <a href="#">Tag4</a>
    </div>
  </div>
  <!-- Content here -->
</template>

<script>
</script>

<style scoped>
.sidenav {
  /* height: 100%; Full-height: remove this if you want "auto" height */
  width: 13%;
  /* width: 200px; Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  left: 18%;
  /* right: 0; */
  /* float: right; */
  background-color: #111; /* Black */
  /* overflow-x: hidden; Disable horizontal scroll */
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
}

.sidenav h1 {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 23px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
  background-color: #818181;
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

/* @media screen and (max-width: 850px) {
  .sidenav {
    padding-top: 20px;
    width: 160px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 750px) {
  .sidenav {
    padding-top: 18px;
    width: 120px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  .sidenav {
    padding-top: 15px;
    width: 90px;
  }
  .sidenav a {
    font-size: 18px;
  }
} */
</style>

