<template>
  <div>
    <div class="richtext" v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    richtext() {
      return this.blok.page_content ? this.$storyapi.richTextResolver.render(this.blok.page_content) : ''
    }
  }
};
</script>

<style lang="scss">

  .richtext a {
    color: #171616;
  }
  .richtext a:hover {
      color: #ed1c24;
  }
</style>
