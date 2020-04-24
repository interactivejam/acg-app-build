<template>
<div>
  <!-- <TopHeader/> -->
  <section>
      <!-- Inner Baneer -->
    <!-- <div class="vic_inner">
        <h2>Melbourne Victoria <span>•</span> {{date}}</h2> -->
        <!-- Menu Sec -->
        <!-- <div class="menu_info d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <div class="container col-c-xl-12">
                <nav class="navbar navbar-expand-lg navbar-light d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <div class="collapse navbar-collapse" id="Navigation">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Organise Your Team
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Sub page 1</a>
                                    <a class="dropdown-item" href="#">Sub page 1</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sports
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Sub page 1</a>
                                    <a class="dropdown-item" href="#">Sub page 1</a>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">FAQs</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Games Awards</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Results</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </div> -->
    <!-- </div> -->
    <!-- Menu Sec -->

    </section>
    <section>
      <nuxt />
    </section>
    <bottom-footer />


  </div>
</template>

<script>
import TopHeader from '~/components/header.vue'
import BottomFooter from "~/components/BottomFooter.vue";

export default {
    data () {
    return {
      imgurl: "",
      date:""
      }
    },
    components: {
      TopHeader,
      BottomFooter
    },
    created() {
      let path = this.$route.path;
      if (path.includes('vic')) {
          this.imgurl = require('../assets/images/VIC.png');
          this.date = "November 21–23";
      } else if (path.includes('nsw')) {
          this.imgurl = require('../assets/images/NSW.png');
          this.date = "October 9-11";
      } else if (path.includes('qld')) {
          this.imgurl = require('../assets/images/QLD.png');
          this.date = "May 15-17";
      }
    },
    methods: {
      openSearchBox :  (event) => {
        let searchElement = document.getElementById('searchbox');
        if (searchElement.classList.contains('searchbox-open')) {
          searchElement.classList.remove('searchbox-open')
        } else {
          searchElement.classList.add('searchbox-open')
        }
      }
    }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/components/vicnav.scss";
@import "../assets/scss/elements/colors.scss";
img {
  width: 100%;
}

.searchbox {
  position: relative;
  min-width: 2.813em;
  width: 0%;
  height: 2.813em;
  float: right;
  overflow: hidden;
  -webkit-transition: width 0.3s;
  -moz-transition: width 0.3s;
  -ms-transition: width 0.3s;
  -o-transition: width 0.3s;
  transition: width 0.3s;
  border-radius: 50px;
  margin-top: 20px;
}

.searchbox {
  .searchbox-input {
    top: 0;
    right: 0;
    border: 0;
    background: $gray-300;
    width: 100%;
    height: 2.813em;
    margin: 0;
    padding: 0px 3.438em 0px 20px;
    font-size: $font16;
    color: $dblack;
    border-radius: 50px;
  }
}
.searchbox {
  .searchbox-input {
    &::-webkit-input-placeholder {
      color: $dblack;
    }
  }
}
.searchbox {
  .searchbox-icon,
  .searchbox-submit {
    width: 2.813em;
    height: 2.813em;
    display: block;
    position: absolute;
    top: 0;
    font-size: 1.125em;
    right: 0;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    line-height: 43px;
    text-align: center;
    cursor: pointer;
    color: $dblack;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    -webkit-transition: all 0.6s ease-in-out;
    -moz-transition: all 0.6s ease-in-out;
    -o-transition: all 0.6s ease-in-out;
    -ms-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
  }
}
.searchbox {
  &.searchbox-open {
    width: 20%;
  }
}
.searchbox {
  &:hover {
    .searchbox-icon {
      background-color: $red;
      color: $white;
    }
  }
}
.search_box {
  margin: 0;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.search_box {
  .searchbox {
    float: left;
    margin: 0;
  }
}
.search_box {
  .searchbox-open {
    width: 30%;
  }
}
.search_box {
  .nav_sec {
    padding: 0;
  }
}

$breakpoint-tablet: 600px;
@media (max-width: $breakpoint-tablet) {
  .search_box {
    .searchbox-open {
      width: 50%;
    }
  }
}
.menu_info .navbar-light .navbar-nav .nav-link:hover {
    color: #ed1c24;
}
.menu_info .navbar-light .navbar-nav li {
    margin: 0 50px 0 0;
    padding: 13px 0 13px 0;
    display: inline-block;
    font-family: "helvetica47regularcondensed";
    font-size: 21px;
    color: #fff;
}
</style>
<!-- Js -->

