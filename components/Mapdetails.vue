
<template>
<div v-editable="blok">
  <header>
    <!-- <div class="nav_sec top_part inner_top">
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
                <div class="date">{{ global.content.Dates }}<span>•</span>{{ global.content.Location }}<span>•</span>{{ global.content.Year }}</div>
                </a>
                <div class="collapse navbar-collapse" id="Navigation">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/contact-us">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">Corporate Games</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
      </div>
    </div> -->
  </header>
  <!--Section-->
  <section>
    <!--Inner Banner -->
    <!-- <div class="inner_banner">
      <div class="container-fluid">
        <div class="col-md-6 ml-md-auto" v-for="global in global" :key="global.id">
          <P>{{ get_bannerimage }}</P>
          <img :src="get_bannerimage.filename" alt="Corporate Games"  class="align-self-end" />
        </div>
      </div>
    </div> -->
    <!-- Menu Sec -->
    <!-- <div class="menu_info">
      <div class="container-fluid">
        <Gamesmenu v-bind:blok="blok"/>
      </div>
    </div> -->
  </section>

</div>
</template>

<script>
import Search from '~/components/Search.vue';
import Gamesmenu from '~/components/Reusable/Gamesmenu.vue';
import Global from '~/components/Global/global.vue';
import Importantdates from '~/components/Reusable/Importantdates.vue';
import Highlights from '~/components/Reusable/Highlights.vue';
import Supporter from '~/components/Reusable/Supporter.vue';
import Schedule from '~/components/Reusable/Schedule.vue';
import Map from '~/components/Reusable/Map.vue';
// import func from '../vue-temp/vue-editor-bridge';

export default {
  data () {
  return {
    global: [],
    faq: [],
    category: [],
    }
  },

  components: {
    Search,
    Gamesmenu,
    Global,
    Importantdates,
    Highlights,
    Supporter,
    Schedule,
    Map
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

    this.$storyapi.get
    ('cdn/stories',
      {
        starts_with: 'faq/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
      }
    )
    .then((res) => {
      this.faq = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get('cdn/stories', {
      starts_with: 'category/',
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.category = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })
  }
};
</script>

<style lang="scss" scoped>
// @import "../assets/scss/components/vicnav.scss";
// @import "../assets/scss/elements/colors.scss";
// @import "../assets/scss/components/games_following.scss";

.date_info [class^="col-"]:nth-child(odd), .date_info > [class*=" col-"]:nth-child(odd) {
    padding: 5px 5px 5px 15px;
    height: 100%;
}
.date_info [class^="col-"]:nth-child(even), .date_info > [class*=" col-"]:nth-child(even) {
    padding: 5px 15px 5px 5px;
    height: 100%;
}

h1.title {
  margin-bottom: 0.75em;
  padding-bottom: 0.75em;
  border-bottom: 2px solid #f6f5f5;
}
h4.title {
  margin-bottom: 0.25em;
  padding-bottom: 0.5em;
  padding-top: 0em;
  border-bottom: 2px solid #ffffff;
}
.menu_info .navbar-light .navbar-nav .nav-link:hover {
    color: #ed1c24;
}
.navbar {
  align-items: flex-start;
}
.inner_banner h3 span {
  font-size: 18px;
  opacity: 0.5;
  padding: 0 0.75em;
}

.menu_info {
  top: -63px;
}

.part_sec {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
  li {
  list-style: disc;
  opacity: 0.75;
  margin-left: 1em;}
}
.rem_info {
    margin: 0;
    padding: 0;
}
.date {
  font-family: 'MYRIADPRO-CONDIT', sans-serif;
  letter-spacing: 0.15em;
  color:#3f3f40;
  margin: 1.5em 0 1em 1em;
  opacity: 1;
  font-size: 0.85em;
}
.date span {
  padding: 0 0.5em;
}
.sponsor {
    margin: 0 0 5px 0;
    padding: 30px 30px 15px 30px;
    background: #f6f5f5;
}
.highlights {
  width: 100%;
}

.inner_banner {
    margin: 0;
    padding: 0 0 0;
    background: rgb(169,168,163,);
    background: linear-gradient(90deg, rgba(169,168,163,1) 100%) rgba(169,168,163,1) 35%, rgba(169,168,163,1) 0%,;
    position: relative;
}
.navbar img {
  height: 6em;
}
.inner_banner h3 {
    font-size: 20px;
    color: #505153;
    letter-spacing: 5px;
    outline: none !important;
    font-family: "helvetica47regularcondensed";
}
.inner_banner h3 span {
    font-size: 14px;
}

.inner_banner img {
    position: relative;
    z-index: 50;
    height: 400px;
    width: auto;
    max-width: none;
}

@media (min-width: 768px) {
.navbar-expand-md .navbar-collapse {
    margin: 1em 1em 0 0;
  }
  .nav_sec.inner_top .navbar-brand {
    width: 350px;
  }
}
</style>
