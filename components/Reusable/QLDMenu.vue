<template>
  <section>
    <!-- Header -->
  <header>
      <div class="nav_sec top_part inner_top">
        <div class="container-fluid">
            <div class="col-12">
              <a class="navbar-brand text-center d-block d-sm-block d-md-block d-lg-none d-xl-none" v-for="global in global" :key="global.id"
                :href="global.content.URL">
                <img :src="global.content.hero_logo"
                     alt="Corporate Games" />
              </a>
              <div class="inner d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <Search />
                <nav class="navbar navbar-expand-md navbar-light">
                  <a class="navbar-brand" v-for="global in global" :key="global.id"
                  :href="global.content.URL">
                  <img :src="global.content.hero_logo"
                     alt="Corporate Games" />
                     <div class="date">{{ global.content.Dates }}<span>•</span>{{ global.content.Location }}</div>
                  </a>
                  <!-- <button
                    class="navbar-toggler navbar-toggler-right collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#Navigation"
                    aria-controls="Navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button> -->

                  <div class="collapse navbar-collapse" id="Navigation">
                    <ul class="navbar-nav ml-auto">

                      <li class="nav-item">
                        <a class="nav-link" href="/">Corporate Games</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/Contact Us">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

        </div>
      </div>
    </header>
    <section>
     <!-- Top Bammer -->
 	  <div class="vic_inner" v-for="global in global" :key="global.id">
      <!-- Menu Sec -->
      <div class="hero-image">
        <img :src="global.content.banner_images" alt="Corporate Games" />
      </div>
      <div class="menu_info d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <div class="container-fluid">
          <Gamesmenu />
        </div>
      </div>
    </div>
    </section>
    <!-- <div class="search_box d-block d-sm-block d-md-block d-lg-none d-xl-none">
      <div class="container">
        <div class="nav_sec">
          <Gamesmenu />
        </div>
      </div>
    </div> -->
    <div class="container-fluid part_sec mt-5">
      <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <component class="detail" v-if="blok.component === 'rich-text'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
            <component class="detail" v-if="blok.component === 'partner'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          </div>
      </div>
  </div>
</section>
</template>

<script>
import Search from '~/components/Search.vue';
import Gamesmenu from '~/components/Reusable/Gamesmenu.vue';

export default {
    data () {
    return {
      page: {story: {content: []}},
      global: []
      }
    },
  props: ['blok'],
  mounted() {
     this.$storyapi.get('cdn/stories', {
        starts_with: 'global/qld-corporate-games',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.global = res.data.stories
      })
      .catch((res) => {
        console.error('Failed to load resource', res)
      })
  },
  components: {
    Search,
    Gamesmenu
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
@import "~/assets/scss/components/vicnav.scss";

section.header {
  position: fixed;
}
.web-headline {
  padding-top: 50px;
  padding-bottom: 30px;
}
.rem_info {
    margin: 0;
    padding: 0;
}
.date {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75em;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(51,51,51,0.5);
  margin: 1.5em 0 1em 1em;
  opacity: 0.85;
}
.date span {
  padding: 0 0.5em;
}
.import {
    margin: 0 0 5px 0;
    padding: 30px 30px 15px 30px;
    background: #f6f5f5;
}
.import h2 {
    margin: 0 0 15px 0;
    padding: 0;
    font-size: 21px;
    color: #171616;
}
.hero-image {
  position: absolute;
  top: 0;
  width: 100%;
   justify-content: center;
  overflow: hidden;
  display: flex;
}
.hero-image  img {
  height: 100%;
  z-index: 20;
  width: auto;
  max-width: none;
}
.vic_inner .menu_info {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    margin-top: auto;
}
.vic_inner {
  position: relative;
  overflow: hidden;
  height: 500px;
  display: flex;
}
.vic_inner h2, .menu_info {
  z-index: 500;
  position: relative;
}
.menu_info .navbar-light .navbar-nav .nav-link:hover {
    color: #ed1c24;
}
.navbar {
  align-items: flex-start;
}

@media (min-width: 768px) {
.navbar-expand-md .navbar-collapse {
    margin: 1em 1em 0 0;
  }
  .nav_sec.inner_top .navbar-brand {
    width: 300px;
  }
}

</style>

