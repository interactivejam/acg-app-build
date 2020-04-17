<template>
  <section class="fdb-block" v-editable="blok">
      <div class="row align-items-center">
        <div class="col-12 col-sm-3 text-center" v-if="blok.Style == 'Right'">
          <img alt="image"
               class="img-fluid w-100"
               :src="blok.image01">
                <img alt="image"
               class="img-fluid w-100"
               :src="blok.image02">
        </div>
        <div class="col-12 col-sm-9 text-center text-sm-right mt-4 mt-sm-0" v-if="blok.Style == 'Right'">
          <h2>{{ blok.headline }}</h2>
          <markdown :text="blok.text">
            </markdown>
        </div>

        <div class="col-12 col-sm-9 text-left" v-if="blok.Style != 'Right'">
          <h2>{{ blok.headline }}</h2>
          <markdown :text="blok.text">
            </markdown>
        </div>
        <div class="col-12 col-sm-3 text-left text-sm-center mt-4 mt-sm-0" v-if="blok.Style != 'Right'">
            <img alt="image"
               class="img-fluid"
               :src="blok.image01">
                <img alt="image"
               class="img-fluid"
               :src="blok.image02">
        </div>
      </div>

  </section>

</template>

<script>
export default {
  props: ['blok']

}
</script>


<style>
  .fdb-block {
    padding: 25px 0;
    position: relative;
    background-size: cover;
    background-position: 50%;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .fdb-block ul li {
    list-style: disc;
    margin-left: 1em;
  }
  .fdb-block ol li {
    list-style: numeral;
    margin-left: 1em;
  }
  .fdb-block a {
      color: #ed1c24;
  }
  .fdb-block a:hover {
      color: #141414;
  }

</style>
