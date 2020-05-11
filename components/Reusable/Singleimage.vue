<template>
  <div class="col-6" v-editable="blok">
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
  padding: 25px 15px;
  background: #fff;
  text-align: center;
}
img {
  border: none;
  vertical-align: middle;
  max-width: 100%;
}
</style>