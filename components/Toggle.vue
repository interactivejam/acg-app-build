<template>
  <div class="toggle card mt-3" v-editable="blok">
  <!-- Using modifiers -->
    <div v-b-toggle.:key="blok._uid" class="card-header">
      <h4>{{ blok.title }}</h4>
      <fa :icon="['fa', 'plus']"/>
    </div>
      <!-- Element to collapse -->
        <b-collapse :id="blok._uid">
          <b-card>{{ blok.richtext }}</b-card>
        </b-collapse>
      </div>
  </div>
</template>

<script>
  export default {
  props: ["blok"],
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
  .toggle .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .toggle .card-header h4 {
      margin: 0;
  }
  .toggle .card-header svg {
      opacity: 0.5;
      font-size: 14px;
  }
</style>
