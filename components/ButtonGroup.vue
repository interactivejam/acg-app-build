<template>
  <div class="row">
      <div class="col-12 text-center">
        <component :key="blok._uid"
                   v-for="blok in blok.button"
                   :blok="blok"
                   :is="blok.component"></component>
      </div>
    </div>


</template>
<script>
export default {
  props: ['blok']
}
</script>


<style>
  .row .58aa303a-7709-494f-998a-c57135dfa91c {
    justify-content: space-between;
  }
  .btn.download {
    padding: 0.625em 1.875em;
    display: inline-block;
    border-radius: 1.875em;
    font-size: 0.875em;
    background: #f6f5f5;
    display: inline-flex;
    margin: 0 1em 1em 0;;
  }
</style>
