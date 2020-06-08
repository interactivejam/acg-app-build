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
 <div class="container">
  <h1 class="detail_title faq">Frequently Asked Questions</h1>
  <hr>
  <div class="row">
    <div class="col-md-9">
      <div v-b-toggle:key="category.uuid" v-for="category in categories" :key="category.id" class="ask_block toggle card mt-3" >
        <div class="categories card-header"><span>{{category.name}}</span><fa :icon="['fa', 'plus']"/></div>
        <b-collapse :id="category.uuid">
          <b-card>
            <li v-for="faq in filteredFaq(category)" :key="faq.id" >
               <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a>
            </li>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div class="col-md-3">
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
      faqs: [],
      categories: [],
      links: [],
      search: '',
      id: Number
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
      this.faqs = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get('cdn/stories', {
      starts_with: 'category/',
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.categories = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get('cdn/links', {
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.links = res.data.links
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

  methods: {
    filteredList: function () {
      console.log("filterlist...", this.faqs)
      return Object.values(this.faqs).filter(el => {
        return el.content.Title.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    filteredFaq: function (el) {
      let faqarray = [];
      let filterlist = this.filteredList();
      for(let i=0; i<filterlist.length; i++) {
        if(filterlist[i].content.Categories[0] == el.uuid) {
          if (this.path) {
            for (let j=0; j<filterlist[i].content.Publish.length; j++) {
              if (filterlist[i].content.Publish[j] == this.path) {
                faqarray.push(filterlist[i]);
              }
            }
          } 
          else {
            faqarray.push(filterlist[i]);
          }
        }
      }
      return faqarray;
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
  .ask_block span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;
    cursor: pointer;
  }

  .ask_block li a {
    color: #000;
    font-family: "Roboto", sans-serif;
  }
  .toggle .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle .card-header span {
      margin: 0;
  }
  .toggle .card-header svg {
      opacity: 0.5;
      font-size: 14px;
  }
 
  .ask_block li a:hover {
    color: #ed1c24;
  }
  
  .categories {

    // margin-bottom: 40px;

    span {
      color: #ed1c24;
      font-size: 21px;
      font-family: "helvetica47regularcondensed";
    }
  }

  @media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1500px;
    }
  }
</style>


