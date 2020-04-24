<template>
    <b-card no-body class="mb-3" v-editable="blok">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <div v-b-toggle.collapse-2 class="card-header">{{ blok.title }}</div>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card><div class="richtext" v-html="richtext"></div></b-card>
        </b-card-body>
      </b-collapse>
    </b-card>
</template>
<script>
  export default {
    props: ["blok"],
    computed: {
      richtext() {
        return this.blok.accordian_group ? this.$storyapi.richTextResolver.render(this.blok.accordian_group) : ''
      }
    }
  }
</script>
<style scoped>
  .toggle .card-header:after {

  }
</style>
