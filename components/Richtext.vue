<template>
  <div>
    <div v-editable="blok" class="richtext" v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    richtext() {
      return this.blok.page_content ? this.$storyapi.richTextResolver.render(this.blok.page_content) : 'fdsafads'
    }
  }
};
</script>

<style lang="scss">

  .richtext a, .red {
    color: #171616;
  }
  .richtext a:hover, .yellow {
      color: #ed1c24;
  }
  .yellowBackground {
    background: #ed1c24;
    padding: 0 0.75em;
  }
  .redBackground {
    background: #171616;
    padding: 0 0.75em;
  }

</style>
