<template>
  <section>
    <div v-editable="story.content">
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'default_following',
  data () {
    return {
      story: { content: {} },
      global: {data: {stories: []}},
    }
  },

  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/${context.params.slug}`, {
      version: context.isDev ? "draft" : "published"
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
        
        // this.$nuxt.$router.go({
        //   path: this.$nuxt.$router.currentRoute,
        //   force: true,
        // })
      }
    })
  },
  // mounted () {
  //   isEditMode(this)
  // },
}


</script>

