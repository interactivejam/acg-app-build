<template>
    <section>
        <div class="position-relative banner_sec">
            <div class="hero-image">
                <img alt="Image" class="img-fluid" :src="blok.image" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10 col-sm-12 web-headline">
                    <h1>{{ blok.Teaser }}</h1>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12"  v-for="global in global"
                                :key="global.id">
                            <article class="b_block">
                                <a :href="global.content.URL">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 align-self-center">
                                           <img v-if="global.content.Logo"
                                              class="tile-logo"
                                              :src="global.content.Logo"
                                              alt="image" />
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6 align-self-center">
                                          <div class="row justify-content-between align-items-center">
                                                <div class="col-sm-11 date">{{ global.content.Dates }}
                                                    <br>{{ global.content.Location }}<span>•</span>{{ global.content.Year }}
                                                </div>
                                                 <div class="col-sm-1">
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
        <div class="container" v-editable="blok">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <component v-if="blok.component === 'rich-text'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12">
                    <h3 class="middle_sec">About Corporate Games</h3>
                      <div class="gameinfo">
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
                      <component v-if="blok.component === 'homeupdates'" :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
                  </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
  data () {
    return {
      page: {story: {content: []}},
      global: [],
      menu: []
    }
  },
  props: ['blok'],
  mounted() {
     this.$storyapi.get
      ('cdn/stories',
        {
        starts_with: 'global/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
        },
        {
        starts_with: 'menu/',
        by_uuids: 'b9fbfb91-4631-4950-9578-5075991db9d7',
        }
      )
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

.searchbox.searchbox-open .searchbox-input {
  background: #f6f5f5 !important;
}

.banner_sec {
    margin: 0 0 10em 0;
    padding: 0;
    background: #f6f5f5;
    position: relative;
}
.web-headline {
  padding: 0px;
  margin-top: 8em;
  margin-bottom: -8em;
  position: relative;
  z-index: 60;
}
.web-headline h1  {
    font-size: 2.65em !important;
    margin: 4em 1em 1em 1em;
    z-index: 50;
    color: #ffffff;
    text-align: center;
    text-shadow: 4px 4px 8px rgba(51, 51, 51, 0.75);
    font-family: "helvetica47regularcondensed";
}
.hero-image {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.hero-image:before {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: rgba(51, 51, 51, 1);
  content: 'x';
  text-align: center;
}
.hero-image  img {
  height: 100%;
  z-index: 20;
  width: auto;
  max-width: none;
  transform: translatex(-50%);
  left: 50%;
  opacity: 0.65;
  position: relative;
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
  height: 8.5em;
}

.banner_sec .b_block:hover { transform: scale(1.025); }
.menu-items {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; }

.menu-items a {
  width: 48%;
}

.date span {
    padding: 0 0.35em;
    opacity: 0.65;
    font-size: 0.85em;
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

</style>
