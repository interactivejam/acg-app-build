<template>
  <div class="container faq">
    <h1>Frequently Asked Questions</h1>
    <div class="during_info">
      <div class="row">
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 align-self-center">
          <ul v-for="category in category" :key="category.id" class="during_list">
            <div v-if="blok.Categories == category.uuid">
              <span class="path">{{ category.content.Name }}</span><fa :icon="['fas', 'long-arrow-alt-right']"/>
              <li><span>{{ blok.Title }}</span></li>
            </div>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 align-self-center text-right">
          <a href="#" class="back_btn"><fa :icon="['fas', 'long-arrow-alt-left']"/> Go Back</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 mb-40">
        <h3 class="title">{{ blok.Title }}</h3>
        <p>
          {{ blok.Categories }}
        </p>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <ul class="faq_list">
          <li><a href="#">Sibling FAQ 1</a></li>
          <li><a href="#">Sibling FAQ 2</a></li>
          <li><a href="#">Sibling FAQ 3</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      category: []
    }
  },
  mounted() {
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
    richtext() {
      return this.blok.content
        ? this.$storyapi.richTextResolver.render(this.blok.content)
        : "";
    }
  }
}
</script>

<style scoped>
  .faq {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .title {
    color: #ed1c24;
  }

  .during_info {
    margin: -20px 0 50px 0;
    padding: 0 0 15px 0;
    border-bottom: 2px solid #e7e7e7; }

  ul.during_list {
    margin: 0;
    padding: 0; }

  ul.during_list li {
    margin: 0 10px 0 0;
    padding: 0 28px 0 0;
    display: inline-block;
    position: relative; }

  .path {
    margin-right: 5px;
    }
  ul.during_list li:last-child:before {
    display: none; }

  ul.during_list li a {
    color: #171616; }

  ul.during_list li a:hover {
    color: #ed1c24; }

  .back_btn {
    margin: 0;
    padding: 10px 40px;
    display: inline-block;
    border: 1px solid #c6c6c6;
    border-radius: 30px;
    font-size: 21px;
    color: #171616; }

  .back_btn i {
    margin-right: 5px;
    font-size: 18px; }

  .back_btn:hover {
    background: #ed1c24;
    border-color: #ed1c24;
    color: #fff;
  }
  ul.faq_list li a {
    color: #ed1c24;
    font-size: 24px;
}
</style>
