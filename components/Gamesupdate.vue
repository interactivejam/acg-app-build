<template>
  <div class="col-xl-6 col-md-6 col-sm-12" v-editable="blok">
      <h2>{{ blok.Update }}</h2>
    <p>{{ blok }}</p>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>