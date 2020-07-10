<template>
  <div class="game_block" v-editable="blok">
    <article>
    <h3>{{ blok.heading }}</h3>
    <p>{{ blok.text }}</p>
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
    font-family: "helvetica47regularcondensed";
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
