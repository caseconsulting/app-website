<template>
  <div class="col-sm-4" style="float:center;">
    <div class="sidenav">
      <h1>Top 10 tags</h1>
      <div class="row">
        <div class="number"><p>1.</p></div>
        <a href="#">Tag1</a>
      </div>

      <div class="row">
        <div class="number"><p>2.</p></div>
        <a href="#">Tag2</a>
      </div>
      <div class="row">
        <div class="number"><p>3.</p></div>
        <a href="#">Tag3</a>
      </div>
      <div class="row">
        <div class="number"><p>4.</p></div>
        <a href="#">Tag4</a>
      </div>
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

  /* overflow-x: hidden; Disable horizontal scroll */
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}

.sidenav .row {
  border-bottom: 1px solid #818181;
  padding-top: 10px;
}
/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
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
  color: #818181;
  display: block;
  text-align: center;
}

.sidenav .number p {
  padding: 10px;
  border: 1px solid #f1f1f1;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  text-decoration: underline;
}

.sidenav:hover + .number {
  background-color: blue;
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

