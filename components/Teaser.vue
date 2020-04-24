<template>
  <div class="col-xl-12 col-md-12 col-sm-12 web-headline" v-editable="blok">
    <h1>{{ blok.headline }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
  .web-headline {
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .banner_sec h1 {
    margin: 0 0 40px 0;
    padding: 0;
    font-size: 45px;
    color: #333333;
}
</style>
