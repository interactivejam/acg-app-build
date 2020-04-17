<template>
  <div>
    <div class="main-body">
      <nuxt />
    </div>
    <bottom-footer />
  </div>
</template>

<script>
import BottomFooter from "~/components/BottomFooter.vue";

export default {
  components: {
    BottomFooter
  }
};
</script>

<style lang="scss">

</style>
