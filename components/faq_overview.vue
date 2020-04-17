<template>
 <div class="container faq">
     <h1>{{ blok.Title }}</h1>
     <div class="row">
        <div class="col-xl-12 col-sm-6">
          <div class="row">
            <ul class="col-xl-4 col-sm-6 ask_block">
                <li v-for="faq in faq"
                    :key="faq.id">
                  <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a>
                </li>
            </ul>
            </div>
        </div>

            <ul class="col-xl-4 col-sm-6 ask_block">

              <li v-for="category in category"
                    :key="category.id">
                  <a :href="`?filter=${category.uuid}`">{{ category.content.Name }}</a>
                </li>
            </ul>

     </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      page: {story: {content: []}},
      faq: [],
      category: []
     }
  },
  props: ['blok'],
   mounted() {
    // TODO: Implement {exists: params.filter}

    this.$storyapi.get
      ('cdn/stories',
        {
          starts_with: 'faq/',
          is_startpage: '0',
          cv: this.$store.state.cacheVersion
        }
      )
      .then((res) => {
        this.faq = res.data.stories
      })
      .catch((res) => {
        console.error('Failed to load resource', res)
      })

       this.$storyapi.get('cdn/stories', {
        starts_with: 'category/',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.category = res.data.stories
      })
      .catch((res) => {
        console.error('Failed to load resource', res)
      })
  }
}
</script>



<style scoped>
 .faq {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .mb {

  }
  .ask_block li a {
    color: #000;
    margin-bottom: 40px;
  }

   .ask_block li a:hover {
    color: #ed1c24;
  }



</style>


