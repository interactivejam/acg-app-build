<template>
  <div v-editable="story.content">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // title: '',
      story: { content: {} }
    }
  },
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      }
    })
  },
  computed: {
    title() {
      return this.story.content.metadata.title
    },
    description() {
      return this.story.content.metadata.description
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },

  asyncData (context) {
    // Load the JSON from the API
      return context.app.$storyapi.get('cdn/stories/home', {
      version: context.isDev ? "draft" : "published"
    })
    .then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
