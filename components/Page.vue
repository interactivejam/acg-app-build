<template>
 <section class="following">
    <div class="position-relative banner_sec">
            <div class="hero-image">
              <img alt="Image" class="img-fluid" :src="blok.image" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10 col-sm-12 web-headline">
                    <div class="row">
                        <div class="col-4" v-for="global in global"
                                :key="global.id">
                            <article class="b_block">
                                <a :href="global.content.URL">
                                    <div class="row">
                                        <div class="col-12 align-self-center">
                                           <img v-if="global.content.Logo"
                                              class="tile-logo"
                                              :src="global.content.Logo"
                                              alt="image" />
                                        </div>
                                        <div class="col-12 align-self-center">
                                          <div class="row justify-content-between align-items-center">
                                                <div class="col-md-11 col-sm-12 date">{{ global.content.Dates }}
                                                    <br>{{ global.content.Location }}
                                                </div>
                                                 <div class="col-sm-1 d-none d-sm-block">
                                                  <fa :icon="['fas', 'angle-right']"/>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
  <div class="container">
    <div class="row my-5">
      <div class="col-xl-8 col-md-8 col-sm-12" v-editable="blok">
        <h2 class="title">{{ blok.title }}</h2>
          <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
          <markdown v-if="blok.text"
           :text="blok.text">
          </markdown>
      </div>
      <div class="col-xl-4 col-md-4 col-sm-12">
      <h4 class="title">Find out more</h4>
        <div class="menu-items storyblok__outline">
          <nuxt-link to="about-the-games" class="corpo_block">
            About the Games<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
          <nuxt-link to="awards" class="corpo_block">
            Games Awards<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
          <nuxt-link to="history" class="corpo_block">
            History<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
          <nuxt-link to="results" class="corpo_block">
            Results<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
          <nuxt-link to="participating-organisations" class="corpo_block">
            Participating Organisations<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
          <nuxt-link to="Contact Us" class="corpo_block">
            Contact Us<fa :icon="['fas', 'angle-right']"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      page: { story: {content: []} },
      global: []
    }
  },
  props: ['blok'],
  mounted() {
     this.$storyapi.get('cdn/stories', {
        starts_with: 'global/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.global = res.data.stories
      })
      .catch((res) => {
        console.error('Failed to load resource', res)
      })
  }
}
</script>
<style scoped>

h2.title {
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

.banner_sec {
    margin: 0 0 20em 0;
    padding: 0;
    background: #f6f5f5;
    position: relative;
}
.web-headline {
  padding: 0px;
  margin-top: 20em;
  margin-bottom: -20em;
}

.hero-image {
  position: absolute;
  overflow: hidden;
  height: 30em;
  width: 100%;
}
.hero-image:before {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: rgba(51, 51, 51, 1);
  content: '';
  text-align: center;
}
.hero-image img {
  height: auto;
  z-index: 20;
  width: 100%;
  max-width: none;
  transform: translate(0);
  opacity: 0.75;
  position: relative;
  z-index: 20;
}

h3.middle_sec {
  margin: 0 0 1em 0;
  padding: 0;
  font-size: 28px;
  color: #171616;
  font-weight: 500;
}

.gameinfo {
  display: flex;
}
.banner_sec .web-headline [class^="col-"], .banner_sec .web-headline > [class*=" col-"] {
    padding: 0 5px;
}

.menu_info .navbar-light .navbar-nav .nav-link:hover {
    color: #ed1c24;
}

.banner_sec .web-headline .row {
    margin: 0 -5px;
    position: relative;
    z-index: 50;
}

.banner_sec .b_block {
  margin: 0 0 30px 0;
  padding: 20px;
  background: #ed1c24;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all .2s ease-in-out;
}
.banner_sec .b_block h2 small {
  margin: 0;
  padding: 0;
  display: block;
  font-family: "helvetica47lightcondensed";
  color: #fabbbe;
}
.banner_sec .b_block svg {
  color: #ffffff;
}

.banner_sec .b_block h2 {
  margin: 0 0 30px 0;
  padding: 0;
  font-size: 40px;
  color: #fff;
  font-style: italic;
  font-family: "helvetica47boldcondensed";
  line-height: 35px;
}
.banner_sec .b_block .date {
  margin: 1em 0;
  padding: 0;
  font-size: 19px;
  color: #fff;
  line-height: 22px;
  font-family: "helvetica47lightcondensed";
}
.banner_sec .b_block img {
  max-width: 90%;
  height: 5.5em;
}

.banner_sec .b_block:hover { transform: scale(1.025); }
.following .menu-items a {
    width: 100% !important;
    display: block;
  }

.menu-items a {
  display: inline-block;
  width: calc( 50% - 5px );
}
.menu-items a:nth-child(even) {
  margin-left: 5px;
}
.menu-items a:nth-child(odd) {
  margin-right: 5px;
}




@media (max-width: 1200px) {
  .go_btn span {
      display: none;
  }
  .banner_sec h1 {
    font-size: 35px;
    margin-bottom: 20px; }

}
@media (max-width: 991px) {
  .banner_sec h1 {
    text-align: center;
  }
}
@media (max-width: 768px ) {

  .hero-image {
    height: 460px;
  }
  .hero-image:before {
    width: auto;
    left: 35%;
    transform: translateX(-35%);
    height: 460px;
  }
}
  .menu-items a:nth-child(odd) {
    margin-right: 0px;
}
  .menu-items a:nth-child(even) {
    margin-left: 0px;
}

@media(max-width:768px){
    .heading-container h2 {
        top:0px;
    }
      .hero-image {
    height: 460px;
  }
  .hero-image:before {
    left: 100%;
    height: 300px;
  }
  .banner_sec .b_block {
    font-size: 10px;
  }
  .banner_sec .b_block .date {
    font-size: 14px;
    margin: 0.25em 0;
    line-height: 18px;
  }
  .hero-image img {
    height: 300px;
    width: auto;
  }
  .web-headline {
    margin-top: 12em;
    margin-bottom: -12em;
  }
  .banner_sec {
    margin: 0 0 12em 0;
  }
}
</style>
