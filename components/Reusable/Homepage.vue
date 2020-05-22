<template>
<!-- <div v-editable="blok"> -->
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
                      <div class="date">{{ global.content.Location }}<span>•</span>{{ global.content.Dates }}<span>•</span>{{ global.content.Year }}</div>
                  </a>
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
      <div class="teaser"  v-for="global in global" :key="global.id">
        <!-- Menu Sec -->
          <div v-editable="blok">
            <component v-if="slide" :blok="slide" :is="slide.component">
            </component>
            </div>
         </div>
        <div class="menu_info">
          <div class="container-fluid">
            <Gamesmenu v-bind:blok="blok" />
          </div>
        </div>
    </section>
    <div class="container-fluid part_sec">
      <div></div>
      <!-- {{blok}} -->
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <component class="detail" v-if="blok.component === 'rich-text'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
          <component class="detail" v-if="blok.component === 'partner'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="container-fluid">
            <div class="rem_info" v-for="global in global" :key="global.id">
              <div class="" v-if="importDate_blok">
                <div v-for="dates in global.content.important_dates" :key="dates.id">
                  <Importantdates v-bind:blok="dates"/>
                </div>
              </div>
              <div class="date_info" v-if="highlights_blok">
                <div class="d-flex flex-wrap justify-content-between align-items-stretch">
                  <div class="highlight" v-for="highlights in global.content.highlights" :key="highlights.id">
                    <Highlights v-bind:blok="highlights"/>
                  </div>
                </div>
              </div>
              <div class="sponsor" v-if="sponsor_blok">
                <h2>Corporate Games Supporter</h2>
                  <div class="d-flex align-items-stretch">
                    <div class="flex-fill align-items-center frame" v-for="sponsor in global.content.sponsor" :key="sponsor.id">
                      <Supporter v-bind:blok="sponsor"/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- </div> -->
</template>

<script>
import Search from '~/components/Search.vue';
import Gamesmenu from '~/components/Reusable/Gamesmenu.vue';
import Importantdates from '~/components/Reusable/Importantdates.vue';
import Highlights from '~/components/Reusable/Highlights.vue';
import Supporter from '~/components/Reusable/Supporter.vue';

export default {
  data () {
  return {
    page: {story: {content: []}},
    global: [],
    currentSlide: 0,
    // arrays:[]
    }
  },
  props: ['blok'],
  mounted() {
    this.$storyapi.get('cdn/stories', {
      starts_with: 'global/vic-corporate-games',
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
    Gamesmenu,
    Importantdates,
    Highlights,
    Supporter
  },

  computed: {
    importDate_blok: function() {
      var date_temp = this.blok.body[3].reference;
      return date_temp.includes('important_date')
    },
    highlights_blok: function() {
      var highlights_temp = this.blok.body[3].reference;
      return highlights_temp.includes('highlights')
    },
    sponsor_blok: function() {
      var sponor_temp = this.blok.body[3].reference;
      return sponor_temp.includes('sponor')
    },
    slide_blok () {
      var arrays = this.blok.body.filter(function(el) {
        return el.component == "slide"
      });
      return arrays;
    },
    slide () {
      var array = this.blok.body.filter(function(el) {
        return el.component == "slide"
      });

      let slides = array.filter((slide, index) => {
        return this.currentSlide === index
      })

      if (slides.length) {
        return slides[0]
      }
      return null
    }
  },

  methods: {
    handleDotClick (index) {
      this.currentSlide = index
    },
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


.date_info [class^="col-"]:nth-child(odd), .date_info > [class*=" col-"]:nth-child(odd) {
    padding: 5px 5px 5px 15px;
    height: 100%;
}
.date_info [class^="col-"]:nth-child(even), .date_info > [class*=" col-"]:nth-child(even) {
    padding: 5px 15px 5px 5px;
    height: 100%;
}

.teaser {
  background: #000000;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

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
  font-family: 'MYRIADPRO-CONDIT', sans-serif;
  font-size: 0.85em;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(51,51,51,0.5);
  margin: 1.5em 0 1em 1em;
  opacity: 1
}
.date span {
  padding: 0 0.5em;
}

.menu_info {
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.4);
  top: -62px;
}
.menu_info .dropdown-menu {
  border-radius: 0;
  /* border: none; */
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 0px;
  margin: 0;
  background: rgba(0, 0, 0, 0.8);
  min-width: 12em;
}
.frame {
  background: yellow;
    padding: 5px;
  background: #fff;
  text-align: center;
  border: 1px solid #f6f5f5;
}
.vic_inner .menu_info {
    position:absolute;
    bottom: 65px;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    margin-top: auto;
}
.vic_inner {
  position: relative;
  overflow: hidden;
  height: 565px;
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
.sponsor {
    margin: 0 0 5px 0;
    padding: 30px 30px 15px 30px;
    background: #f6f5f5;
}
.highlight {
  width: calc(50% - 5px);
}
.teaser__pag {
  width: 100%;
  text-align: center;
  margin-top: -100px;
}
.teaser__pag-dot {
  text-indent: -9999px;
  border: 0;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 5px 6px;
  background-color: #ccc;
  -webkit-appearance: none;
  cursor: pointer;

  &--current {
    background-color: #000;
  }
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

