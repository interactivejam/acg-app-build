<template>
 <div class="container faq">
  <h1 class="detail_title">Frequently Asked Questions</h1>
  <div class="row">
    <div class="col-xl-12 col-md-12">
      <div class="row">
        <div v-for="category in category" :key="category.id" class="col-xl-3 col-sm-6 ask_block faq_list" > 
          <ul class="categories">{{func_na(category)}}
            <hr class="line">
              <li class="ask_block" v-for="faq in faq" :key="faq.id" >
                <div v-if="faq.content.Categories[0] == func_uuid(category)" >
                  <div v-if="path">
                    <li v-for="publish in faq.content.Publish" :key="publish.id">
                      <div v-if="publish == path" >
                       <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a> 
                      </div>
                    </li>
                  </div>
                  <div v-else>
                    <li><a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a></li>
                  </div>
                </div>
              </li>
            </ul>
        </div>  
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      story: {content: []},
      faq: [],
      category: [],
      newCategory: [],
     }
  },
  
  methods: {
    
    func_na: function(na) {
      for(let i=0; i<this.category_reference.length; i++) {
      if(na.uuid === this.category_reference[i]){
        return na.name;
        }
      }
    },
    func_uuid: function(ud) {
      for(let i=0; i<this.category_reference.length; i++) {
      if(ud.uuid === this.category_reference[i]){
        return ud.uuid;
        }
      }
    },
    func_uuid: function(ud) {
      for(let i=0; i<this.category_reference.length; i++) {
      if(ud.uuid === this.category_reference[i]){
        return ud.uuid;
        }
      }
    },
    func_uuid: function(ud) {
      for(let i=0; i<this.category_reference.length; i++) {
      if(ud.uuid === this.category_reference[i]){
        return ud.uuid;
        }
      }
    }
  },
  props: {
    // blok: [],
    faq_reference: [],
    category_reference: [],
    path: String,
    slug: String
  },
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

<style scoped>

 .faq {
    margin-top: 40px;
  }
  .detail_title {
    color: #000;
    margin-bottom: 40px !important;
    margin-top: 80px; 
  }

  .line {
    border: none;
  }
  .ask_block li a {
    color: #000;
    margin-bottom: 40px;
    font-size: 24px
  }
  .ask_block li a:hover {
    color: #ed1c24;
  }
  .categories {
    color: #ed1c24;
    font-size: 24px;
    margin-bottom: 40px;
    font-family: "helvetica47lightcondensed"
  }
  @media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1500px;
    }
  }
</style>


