<template>
  <div v-editable="blok">
    <figure>
      <img :src="blok.image" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
<style scoped>
figure {
  margin: 0 0 10px 0;
  padding: 15px;
  background: #fff;
  text-align: center;
  border: 1px solid #f6f5f5;
}
img {
  border: none;
  vertical-align: middle;
  width: 100%;
}
</style>
