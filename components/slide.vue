<template>
  <div class="slide" v-editable="blok">
    <img :src="blok.image">
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.slide {
  text-align: center;
  margin: auto;
  position: relative;
}
.slide img {
  height: 30em;
  z-index: 20;
  width: auto;
  opacity: 0.75;
  max-width: none;
}

</style>
