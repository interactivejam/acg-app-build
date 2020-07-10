<template>
  <figure v-editable="blok">
      <img :src="blok.image" />
    </figure>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
<style scoped>
figure {
  margin: 0;
}
img {
  border: none;
  vertical-align: middle;
  width: 100%;
}
</style>
