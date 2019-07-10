<template>
  <nav class="navbar navbar-expand-lg g-py-0">
    <div class="container-fluid justify-content-between g-pos-rel">
      <!-- Navigation -->
      <div class="navbar-collapse align-items-center flex-sm-row" id="navBar">
        <!-- Logo -->
        <a href="https://www.consultwithcase.com" class="navbar-brand u-header__logo" data-type="static">
          <img
            class="u-header__logo-img u-header__logo-img--main g-width-110"
            src="/assets/img/case/logo-banner.gif"
            alt="Case Consulting, Inc."
          />
        </a>
        <!-- End Logo -->

        <!-- navigation drop down button -->
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>

        <!-- navigation list -->
        <ul
          id="js-scroll-nav"
          class="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto menu"
        >
          <TitleSearchBar />
          <li v-for="section in Sections" :key="section.name" class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
            <a v-bind:class="[{ filterUnderline: isRoute(section.ref) }]" :href="section.ref" class="nav-link p-0">{{
              section.name
            }}</a>
          </li>
        </ul>
      </div>

      <!-- best places to work logo -->
      <div class="bptw">
        <a class="navbar-brand u-header__log">
          <img src="/assets/img/awards/2019_BPTW_logo.png" alt="Best places to work 2019 logo" class="nav-pad" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      Sections: [
        {
          name: 'Home',
          ref: '/#home'
        },
        {
          name: 'Case Cares',
          ref: '/#case-cares'
        },
        {
          name: 'New Hires',
          ref: '/#new-hires'
        },
        {
          name: 'Awards',
          ref: '/#awards'
        }
      ],
      hash: ''
    };
  },
  methods: {
    isRoute(ref) {
      if (this.$route.path.slice(-4) == 'html') {
        return false;
      }
      this.filter = this.$route.hash.split('#');

      if (this.filter.length <= 1) {
        this.hash = 'home';
      } else if (this.filter.length == 2) {
        this.hash = this.filter[1];
      } else {
        this.hash = this.filter[2];
      }
      return this.hash.toLowerCase() === ref.slice(2).toLowerCase();
    }
  }
};
</script>

<style>
@media (max-width: 48em) {
  .navbar {
    margin-bottom: 0px;
  }

  .bptw {
    display: none;
  }
}
/* header */

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

/* menu */

.menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.menu-icon .navicon:before {
  top: 5px;
}

.menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.menu-btn {
  display: none;
}

.menu-btn:checked ~ .menu {
  max-height: 240px;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  li {
    float: left;
  }
  li a {
    padding: 20px 30px;
  }
  .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .menu-icon {
    display: none;
  }
}
</style>
