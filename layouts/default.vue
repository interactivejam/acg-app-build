<template>
  <div>
    <div class="main-body">
    <top-header />
    <section>
      <nuxt />
    </section>
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
@import "../assets/scss/components/nav.scss";
</style>
