<template>
  <div class="game_block" v-editable="blok">
    <article>
    <p>{{ blok.heading }}</p>
    <a :href="blok.find_out_more_link.url">Find out more  <fa :icon="['fas', 'angle-right']"/></a>
    <p class="dated">{{ blok.date }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.game_block {
    margin: 1em 0;
    padding: 1.5em 1em;
    display: block;
    background: #f6f5f5;
}


.game_block p {
    margin: 0 0 5px 0;
    padding: 0;
    font-size: 1em;
    color: #171616;
}
.game_block a {
    margin: 0 0 8px 0;
    padding: 0;
    display: inline-block;
    color: #ed1c24;
    font-family: "helvetica47lightcondensed";
}
.game_block .dated {
    margin: 0;
    padding: 0;
    display: block;
    font-size: 12px;
    color: #868585;
    text-transform: uppercase;
}
</style>
