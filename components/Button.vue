<template>
  <component v-editable="blok">
    <a :href="blok.link.cached_url"
       class="btn"
       target="_blank">
      {{ blok.text }}
    </a>
  </component>
</template>

<script>
export default {
  props: ['blok']
}
</script>
