<template>
  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
    <component v-if="blok.component === 'important-dates'" :key="blok._uid" v-for="blok in blok.highlights" :blok="blok" :is="blok.component"></component>
    <component v-if="blok.component === 'highlights'" :key="blok._uid" v-for="blok in blok.highlights" :blok="blok" :is="blok.component"></component>
  </div>

</template>

<script>
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

