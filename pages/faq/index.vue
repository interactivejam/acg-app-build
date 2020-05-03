<template>
  <div>
    <section>
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :slug="story.full_slug" :is="story.content.component"></component>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'default_following',

  data () {
    return { story: { content: {} } }
  },

  asyncData (context) {
    
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/faq/`, {
      version: context.isDev ? "draft" : "published"
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

<style scoped lang="scss">

</style>
