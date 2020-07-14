<template>
  <div v-editable="blok" class="slide">
    <component v-if="slide" :blok="slide" :is="slide.component"></component>
    <div class="teaser__pag">
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss">
@import "../assets/scss/elements/colors.scss";
</style>
