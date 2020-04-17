<template>
  <div class="rem_info">

       xx

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
  components: {

  },
  mounted() {
     this.$storyapi.get('cdn/stories/global/vic-corporate-games', {
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


</style>
