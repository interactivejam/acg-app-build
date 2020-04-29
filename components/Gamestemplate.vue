<template>
<div>
  <header>
    <div class="nav_sec top_part inner_top">
      <div class="container-fluid">
          <div class="col-12">
            <a class="navbar-brand text-center d-block d-sm-block d-md-block d-lg-none d-xl-none" v-for="global in global" :key="global.id"
              :href="global.content.URL">
              <img :src="global.content.footer_logo"
                alt="Corporate Games" />
            </a>
            <div class="inner d-none d-sm-none d-md-none d-lg-block d-xl-block">
              <Search />
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" v-for="global in global" :key="global.id"
                :href="global.content.URL">
                <img :src="global.content.footer_logo"
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
        <div class="col-md-4 ml-md-auto" v-for="global in global" :key="global.id">
          <img :src="global.content.banner_following" alt="Corporate Games"  class="align-self-end" />
        </div>
      </div>
    </div>
    <!-- Menu Sec -->
    <div class="menu_info">
      <div class="container">
        <Gamesmenu v-bind:blok="blok"/>
      </div>
    </div>
  </section>
  <div class="container part_sec">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <h2 class="title">{{ blok.Title }}</h2>
            <!-- {{global}} -->
            <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
            <div v-for="faq in refFaq()" :key="faq.id">
                <ul><h3 class="title">{{ faq.name }}</h3>
                  <li>
                  <p class="content">
                  {{ faq.content.text.content[0].content[0].text}}
                  </p> </li>
                </ul>
            </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="container-fluid">
            <div class="rem_info" v-for="global in global" :key="global.id">
              <div class="">
                <div v-for="dates in global.content.important_dates" :key="dates.id">
                  <Importantdates v-bind:blok="dates"/>
                </div>
              </div>
              <div class="">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12" v-for="highlights in global.content.highlights" :key="highlights.id">  
                    <Highlights v-bind:blok="highlights"/>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="row">
                  <div v-for="sponsor in global.content.sponsor" :key="sponsor.id">  
                    <Supporter v-bind:blok="sponsor"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <component :v-if="blok.component === 'important-dates'" :key="blok._uid" v-for="blok in blok.highlights" :blok="blok" :is="blok.component"></component>
          <component :v-if="blok.component === 'highlights'" :key="blok._uid" v-for="blok in blok.highlights" :blok="blok" :is="blok.component"></component> -->
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
    Supporter
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

h2.title {
  margin-bottom: 0.75em;
  padding-bottom: 0.75em;
  border-bottom: 2px solid #f6f5f5;
}
h4.title {
  margin-bottom: 0.25em;
  padding-bottom: 0.5em;
  padding-top: 0.65em;
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
.date {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75em;
  letter-spacing: 0.15em;
  color: #3f3f3f;
  margin: 1.5em 0 1em 1em;
  opacity: 0.85;
}
.date span {
  padding: 0 0.5em;
}
.menu_info {
  top: -57px;
}
.part_sec li {
  list-style: disc;
  opacity: 0.75;
  margin-left: 1em;
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
