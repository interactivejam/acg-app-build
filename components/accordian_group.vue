<template>

  <div v-editable="blok" role="tablist">
    xx
    <component v-if="accordian" :blok="accordian" :is="slide.component"></component>
  </div>
</template>

<script>
  import Accordian from '~/components/accordian.vue';
  export default {
    components: {
      Accordian,
    },
    props: ["blok"]
  }
</script>
<style scoped>
  .toggle .card-header:after {

  }
</style>




