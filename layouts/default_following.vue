<template>
  <div>
    <div class="main-body">
    <top-header />
      <nuxt />
    </div>
    <bottom-footer />
  </div>
</template>

<script>
import TopHeader from "~/components/header.vue";
import BottomFooter from "~/components/BottomFooter.vue";

export default {
  components: {
    TopHeader,
    BottomFooter
  }
};
</script>

<style lang="scss">
@import "../assets/scss/components/default._following.scss";
</style>
