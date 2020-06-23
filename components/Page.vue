<template>
  <div v-editable="blok">
 <section class="following">
    <div class="position-relative banner_sec">
            <div class="hero-image">
              <img alt="Image" class="img-fluid" :src="blok.image" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8 col-sm-12 web-headline">
                 <a class= "logo" href="/home">
                      <img src="https://a.storyblok.com/f/76648/x/3ff6952321/corporate-games.svg" alt="Corporate Games" />
                    </a>
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
      <div class="col-xl-8 col-md-8 col-sm-12">

          <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
          <markdown v-if="blok.text"
           :text="blok.text">
          </markdown>
      </div>
      <div class="col-xl-4 col-md-4 col-sm-12">
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
  </div>
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
<style lang="scss" scoped>
@import "~/assets/scss/components/corporate.scss";




.menu-items a {
    width: 100% !important;
    display: block;
}



@media (max-width: 768px ) {

  .menu-items a:nth-child(odd) {
    margin-right: 0px;
}
  .menu-items a:nth-child(even) {
    margin-left: 0px;
}

}

</style>
