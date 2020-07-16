<template>
  <div>
    <gamesheader />
    <section class="main-body">
      <nuxt />
    </section>
    <bottom-footer/>
  </div>
</template>

<script>
import BottomFooter from '~/components/BottomFooter.vue';
import Gamesheader from '~/components/Reusable/Gamesheader.vue';
export default {
  components: {
    BottomFooter,
    Gamesheader
  }
}
</script>


<style lang="scss">

</style>
