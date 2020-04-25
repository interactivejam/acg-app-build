<template>
  <div>
    <section>
      <div class="find_sec">
        <div class="container">
          <h2>What do you need to find out more about?</h2>
          <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-7 col-md-8 col-sm-12">
                  <div class="input-group">
                      <input type="text" class="form-control" placeholder="Type keywords to find answers">
                  </div>
              </div>
          </div>
        </div>
      </div>
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :path="vic" :slug="story.full_slug" :is="story.content.component"></component>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default_following',
  data () {
    return { 
      story: { content: {} },
      vic:'VIC'
    }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/vic/faq`, {
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
  .find_sec {
    margin: 0;
    padding: 80px 0;
    text-align: center;
    background: #f6f5f5;
    text-align: center;

  h2 {
    margin: 0 0 35px 0;
    padding: 0;
    font-size: 34px;
    color: #171616;
  }
  .input-group {
    margin: 0;
    padding: 0;
  }
}

.find_sec .input-group .form-control {
  height: 60px;
  margin: 0;
  padding: 0 35px;
  background: #fff;
  border: 1px solid #e4e3e3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-size: 21px;
  color: #a2a2a2;
  font-family: "Roboto", sans-serif; }
</style>
