<template>
<div v-editable="blok">
  <div v-if="blok.align == 'center'" class="d-flex justify-content-center" style="width: 100%;">
    <a :href="blok.link.cached_url"
       class="btn download"
       target="_blank">
      <fa :icon="['fa', 'arrow-down']"/>
      {{ blok.button }}
    </a>
   </div>
   <div v-if="blok.align !== 'center'" style="width: 100%;">
    <a :href="blok.link.cached_url"
       class="btn download"
       target="_blank">
      <fa :icon="['fa', 'arrow-down']"/>
      {{ blok.button }}
    </a>
   </div>
</div>
</template>
<script>
export default {

  props: ['blok']
}
</script>


<style scpoped>
  .btn.download {
    padding: 0.625em 1.5em 0.625em 1em;
    display: inline-block;
    border-radius: 0;
    background: #f6f5f5;
    margin: 0 1em 0.5em 0;
    text-align: left;
    width: 100%;
  }
  .btn.download:hover {
    background: #f7e037;
  }
   .btn.download svg {
      margin-right: 0.5em;
      margin-top: 0.35em;
      color: #ed1c24;
      font-size: 0.9em;
  }
</style>
