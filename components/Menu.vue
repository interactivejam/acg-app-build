<template>
<div>
  <div class="menu-items" v-for="global in global" :key="global.id">
      <a class="corpo_block" :href="global.content.main_navi.link" :key="blok" v-for="blok in blok.main_navi">
        {{ global.content.main_navi.name }}
        <fa class="menu-items-icon" :icon="['fas', 'angle-right']" />
      </a>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      global: []
    }
  },
  props: ['blok'],
  mounted() {
     this.$storyapi.get('cdn/stories/global', {
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
