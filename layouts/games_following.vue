<template>
  <div>
    <section class="main-body">
      <nuxt />
    </section>
    <bottom-footer/>
  </div>
</template>

<script>
import BottomFooter from '~/components/BottomFooter.vue';
export default {
  components: {
    BottomFooter
  }
}
</script>


<style lang="scss">

</style>
