<template>
<div>
 <div class="find_sec">
  <div class="container">
    <h2>What do you need to find out more about?</h2>
    <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-7 col-md-8 col-sm-12">
          <div class="input-group">
            <input type="text" v-model="search" class="form-control" placeholder="Type keywords to find answers">
          </div>
        </div>
    </div>
  </div>
</div>
 <div class="container faq">
  <h1 class="detail_title">Frequently Asked Questions</h1>
  <hr>
  <div class="col-xl-12 col-md-12">
    <div class="row">
      <ul v-for="category in category" :key="category.id" class="col-xl-3 col-sm-6 ask_block faq_list" >
        <li class="categories"> {{category.content.Name}}
          <hr class="line">
          <ul class="ask_block">
            <li v-for="faq in filteredList" :key="faq.id" >
              <div v-if="faq.content.Categories[0] == category.uuid" >
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
        </li>
      </ul>
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
      links: [],
      search: '',
     }
  },

  props: {
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
      console.log("faq", this.faq)
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
      console.log("category", this.category)
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get('cdn/links', {
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.links = res.data.links
      console.log("links", this.links)
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
  },

  computed: {
    filteredList() {
      return Object.values(this.faq).filter(el => {
        return el.content.Title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

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
    font-family: "helvetica47regularcondensed"
  }
  @media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1500px;
    }
  }
</style>


