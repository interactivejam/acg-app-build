<template>
  <div v-editable="blok"
       class="row">
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
