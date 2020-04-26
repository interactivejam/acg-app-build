<template>
 <div class="container faq">
  <h1 class="detail_title">Frequently Asked Questions</h1>
    <div class="col-xl-12 col-md-12">
      <div class="row">
          <ul  v-for="ncategory in newCategory()" :key="ncategory.id" class="col-xl-3 col-sm-6 ask_block faq_list categories" >{{ncategory.name}}
            <hr class="line">
              <li v-for="faq in newFaq()" :key="faq.id" >
                <div v-if="faq.content.Categories[0] == ncategory.uuid" >
                  <div v-if="path">
                    <!-- <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a> -->
                    <div v-for="publish in faq.content.Publish" :key="publish.id">
                      <div v-if="publish === path" >
                       <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a> 
                      </div>
                      <!-- <div v-else>
                        {{path}}negative{{publish}}
                        <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a>
                      </div> -->
                    </div>
                  </div> 
                  <div v-else>
                    <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a>
                  </div>
                </div>
              </li>
            </ul>
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
      // newCategory: [],
     }
  },
  
  methods: {
    
    newCategory: function() {
      console.log("category", this.category_reference)
      let newCategory = [];
      // this.newCategory = [];
      for(let j=0; j<this.category_reference.length; j++) {        
        for(let i=0; i<this.category.length; i++) {         
          if(this.category_reference[j] === this.category[i].uuid){
              newCategory.push(this.category[i]);
          }
        }
      } 
      // console.log("fds32432fs", this.newCategory)
      return newCategory;
      
    },

    newFaq: function() {
      let newFaq = [];
      // this.newCategory = [];
      for(let j=0; j<this.faq_reference.length; j++) {        
        for(let i=0; i<this.faq.length; i++) {         
          if(this.faq_reference[j] === this.faq[i].uuid){
                console.log("faq_referecne", this.faq[i].uuid)
              newFaq.push(this.faq[i]);
              
          }
        }
      } 
      console.log("faq", this.newFaq)
      return newFaq;    
    },
  },
  props: {
    // blok: [],
    faq_reference: {},
    category_reference: {},
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


