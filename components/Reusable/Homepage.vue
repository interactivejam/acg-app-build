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
            <Gamesmenu v-bind:blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid part_sec">
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
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12" v-for="highlights in global.content.highlights" :key="highlights.id">  
                    <Highlights v-bind:blok="highlights"/>
                  </div>
                </div>
              </div>
              <div class="" v-if="sponsor_blok">
                <div class="row">
                  <div v-for="sponsor in global.content.sponsor" :key="sponsor.id">  
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
    global: []
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

// .hero-image {
//   background-image: url('https://a.storyblok.com/f/76648/1920x561/b01d02b1c3/vic_banner_bg.jpg');
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-size: auto;
// }

.hero-image {                           
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  display: flex;
}               
.hero-image img {
  height: 500px;                                                                                                                    
  z-index: 20;                
  width: 100%                                                                                                                                                             ;
  //max-width: 100%;
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

@media (min-width: 768px) {
.navbar-expand-md .navbar-collapse {
    margin: 1em 1em 0 0;
  }
  .nav_sec.inner_top .navbar-brand {
    width: 300px;
  }
}

</style>

