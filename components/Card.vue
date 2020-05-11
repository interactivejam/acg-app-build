<template>
  <div v-editable="blok" :class="card">
    <component :key="blok._uid"
               v-for="blok in blok.body"
               :blok="blok"
               :is="blok.component"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
<style scoped>

ul {
  list-style: none;
}
ul li {
  padding: 0.75em;
  border-bottom: 1px solid #cccccc;
   list-style: none !important;
}

</style>
