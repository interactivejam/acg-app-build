<template>
<div class="container faq" v-editable="blok">
    <div class="during_info">
        <h1 class="detail_title">Frequently Asked Questions</h1>
        <div class="row">
            <div class="col-xl-9 col-md-9 align-self-center">
                <ul v-for="category in category" :key="category.id" class="during_list">
                    <div class="path" v-if="blok.Categories == category.uuid">
                        <span>{{ category.content.Name }}</span>
                        <fa :icon="['fas', 'long-arrow-alt-right']" class="icon" />
                        <li><span>{{ blok.Title }}</span></li>
                    </div>
                </ul>
            </div>
            <div class="col-xl-3 col-md-3 back">
              <!-- <nuxt-link :to="to" class="back_btn">
                &#8592; Go Back 
              </nuxt-link> -->
              <a @click="$router.go(-1)" class="back_btn">
              <fa :icon="['fas', 'long-arrow-alt-left']" /> Go Back</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-8 col-md-8">
            <h3 class="title">{{ blok.Title }}</h3>
            <p class="content">
                {{ blok.text.content[0].content[0].text}}
            </p>
        </div>
        <div class="col-xl-4 col-md-4">
            <ul v-for="faq in faq" :key="faq.id" class="faq_list">
                <div v-if="faq.content.Categories[0] == blok.Categories">
                    <li>
                        <a :href="`/${faq.full_slug}`">{{ faq.content.Title }}</a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        story: { content: []},
        faq: [],
        category: [],
      }
    },

    props: ['blok'],
    
    mounted() {
      this.$storyapi.get('cdn/stories', {
        starts_with: 'faq/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
      })
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
    },
    computed: {
      to () {
        if (this.client || !this.$routerHistory || !this.$routerHistory.hasPrevious()) {
            // probably ssr, or hasn't navigated yet.
            return { path: '/' };
        }

        return { path: this.$routerHistory.previous().path };
      },
    },
}
</script>

<style scoped>
.faq {
    margin-top: 40px;
}

.icon {
    margin: 0 10px 0 10px;
}

.detail_title {
    color: #000;
    margin-bottom: 20px !important;
    margin-top: 80px;
}

.title {
    color: #ed1c24;
    font-size: 24px !important;
}

.content {
    font-size: 20px;
}

.during_info {
    margin: -20px 0 50px 0;
    padding: 0 0 15px 0;
    border-bottom: 2px solid #e7e7e7;
}

ul.during_list {
    margin: 0;
    padding: 0;
}

ul.during_list li {
    margin: 0 10px 0 0;
    padding: 0 28px 0 0;
    display: inline-block;
    position: relative;
}

.path {
    margin-right: 5px;
    font-size: 22px;
}

ul.during_list li:last-child:before {
    display: none;
}

ul.during_list li a {
    color: #171616;
}

ul.during_list li a:hover {
    color: #ed1c24;
}

.back {
    text-align: right;
}

.back_btn {
    margin: 0;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #c6c6c6;
    border-radius: 30px;
    font-size: 21px;
    color: #171616;
}

.back_btn i {
    margin-right: 5px;
    font-size: 18px;
}

.back_btn:hover {
    background: #ed1c24;
    border-color: #ed1c24;
    color: #fff;
    cursor: pointer;
}

ul.faq_list li a {
    color: #ed1c24;
    font-size: 24px;
    margin-bottom: 40px;
    font-family: "helvetica47regularcondensed"
}

@media (min-width: 1200px) {

    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl {
        max-width: 1500px;
    }
}
</style>
