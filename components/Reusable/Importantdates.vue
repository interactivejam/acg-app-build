<template>
  <div class="part_sec import">
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12" v-editable="blok">
        <div class="impo_block">
        <p><strong>{{blok.date_guaranteed_entry}}</strong>{{blok.month_guaranteed_entry[0]}}</p>
        {{blok.label_guaranteed_entry}}
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12" v-editable="blok">
        <div class="impo_block">
        <p><strong>{{blok.date_final_entry}}</strong>{{blok.month_final_entry[0]}}</p>
        {{blok.label_final_entry}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12" v-editable="blok">
      <div class="impo_block">
      <p><strong>{{blok.date_team_uniform}}</strong>{{blok.month_team_uniform[0]}}</p>
      {{blok.label_team_uniform}}
      </div>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12" v-editable="blok">
      <div class="impo_block">
      <p><strong>{{blok.date_amendment}}</strong>{{blok.month_amendment[0]}}</p>
      {{blok.label_amendment}}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.part_sec.import {
    margin: 0 0 5px 0;
    padding: 30px 30px 15px 30px;
    background: #f6f5f5;
}
.impo_block {
    margin: 0 0 10px 0;
    display: flex;
    padding: 0;
    font-size: 16px;
    color: #171616;
    line-height: 1em;
    align-items: center;
    font-family: 'Roboto', sans-serif;
}

.impo_block p {
    margin: 0 10px 0 0;
    padding: 10px 5px 5px 5px;
    width: 48px;
    display: inline-block;
    background: #ffe800;
    font-size: 12px;
    color: #171616;
    text-transform: uppercase;
    text-align: center;
    line-height: 15px;
}
.impo_block p strong {
    display: block;
    font-size: 18px;
}

</style>
