<template>
<div v-editable="blok">
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
                <div class="date">{{ global.content.Dates }}<span>•</span>{{ global.content.Location }}<span>•</span>{{ global.content.Year }}</div>
                </a>
                <div class="collapse navbar-collapse" id="Navigation">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/Contact Us">Contact</a>
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
    </div>
  </header>
  <!--Section-->
  <section>
    <!--Inner Banner -->
    <div class="inner_banner">
      <div class="container-fluid">
        <div class="col-md-6 ml-md-auto" v-for="global in global" :key="global.id">
          <!-- <P>{{ get_bannerimage }}</P> -->
          <img :src="get_bannerimage.filename" alt="Corporate Games"  class="align-self-end" />
        </div>
      </div>
    </div>
    <!-- Menu Sec -->
    <div class="menu_info">
      <div class="container-fluid">
        <Gamesmenu v-bind:blok="blok"/>
      </div>
    </div>
  </section>
  <div class="container part_sec">
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <!-- <p>{{blok}}</p> -->
        <h1 class="title">{{ blok.Title }}</h1>
        <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
        <schedule v-bind:blok="blok"/>
        <div v-for="faq in refFaq()" :key="faq.id">
          <ul>
            <h3 class="title">{{ faq.name }}</h3>
            <li>
              <p class="content">
                {{ faq.content.text.content[0].content[0].text}}
              </p> 
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">

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
                <div class="d-flex flex-wrap justify-content-between align-items-stretch">
                  <div class="flex-fill align-items-stretch" v-for="sponsor in global.content.sponsor" :key="sponsor.id">
                    <Supporter v-bind:blok="sponsor"/>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
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
    Schedule
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
    get_bannerimage () {
      // var bannerimage = this.global.map(el => el.content.banner_following[Math.floor(Math.random() * el.content.banner_following.length)])
      var imagesrc = this.global[0].content.banner_following;
      imagesrc = imagesrc[Math.floor(Math.random() * imagesrc.length)]
      return imagesrc;
    }
  },

  methods: {

    newFaq: function() {
      var newFaq = [];
      for(let j=0; j<this.blok.body[1].reference.length; j++) {
        for(let i=0; i<this.faq.length; i++) {
          if(this.blok.body[1].reference[j] === this.faq[i].uuid){
            newFaq.push(this.faq[i]);
          }
        }
      }
      return newFaq;
    },

    newCategory: function() {
      let newCategory = [];
      for(let j=0; j<this.blok.body[2].reference.length; j++) {
        for(let i=0; i<this.faq.length; i++) {
          if(this.blok.body[2].reference[j] === this.faq[i].content.Categories[0]){
            newCategory.push(this.faq[i]);
          }
        }
      }
      return newCategory;
    },

    refFaq: function() {
      let array1 = this.newFaq();
      let array2 = this.newCategory();
      let array3 = array1.concat(array2);

      const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
      const unique = uniqueArray(array3);
      return unique;
    },

    openSearchBox : (event) => {
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
@import "../assets/scss/components/games_following.scss";

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

.highlight, .sponsor .flex-fill {
  width: calc(50% - 5px);
}

.inner_banner {
    margin: 0;
    padding: 0 0 0;
    background: rgb(219,224,230);
    background: linear-gradient(90deg, rgba(167,164,159,1) 100%) rgba(197,197,197,1) 35%, rgba(219,224,230,1) 0%,;
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
