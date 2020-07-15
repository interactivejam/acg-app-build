<template>
  <section>
    <div>
      <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
      <Mapdetails v-bind:blok="story.content" />
    </div>
  </section>
</template>

<script>

import Mapdetails from '~/components/Mapdetails'

export default {
  layout: 'games_following',
  data () {
    return {
      story: { content: {}} 
    }
  },

  components: {
    Mapdetails
  },
  
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
    return context.app.$storyapi.get("cdn/stories/vic/sport", {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  mounted () {
  this.$storybridge.on(['input', 'published', 'change'], (event) => {
    if (event.action == 'input') {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    } else {
      window.location.reload()
    }
  })
}
}
</script>
