<template>
  <div v-editable="blok" class="slide col-xl-12 col-lg-12 p-0">
    <img :src="blok.image" alt class="pb-5" />
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

