<template>
  <div class="row flex-column-reverse flex-lg-row part_block" v-editable="blok">
    <Modal :text="blok" v-if="showModal" @close="showModal = false"/>
    <div class="col-md-8 col-sm-12">
      <div class="part_inn">
        <div class="row">
          <div class="col">
            <h2>{{ blok.Name }}</h2>
          </div>
          <div class="col text-right">
            <span>{{ blok.Label }}</span>
          </div>
        </div>
        <p>{{ `${blok.text.content[0].content[0].text}...` }}</p>
        <a href="#"  class="read_btn" @click.prevent="openModal">
          Read More
          <fa class="ml-1" :icon="['fas', 'angle-right']" />
        </a>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <figure>
            <img :src="blok.Logo" alt>
        </figure>
    </div>
  </div>

</template>


<script>
import Modal from "../Modal/Modal";

export default {
  props: ["blok"],
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal: function () {
      this.showModal = true;
    }

  },
  computed: {
    richtext() {
      return this.blok.content
        ? this.$storyapi.richTextResolver.render(this.blok.content)
        : "";
    }
  }
};
</script>

<style scoped>
.part_block {
    margin: 2em 0;
    padding: 50px 35px 25px 35px;
    background: #f6f5f5;
}
.part_inn {
    margin: 0 0 0 0;
    padding: 0;
}
.part_inn h2 {
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 24px;
  color: #171616;
}
.part_inn span {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 1em;
  color: #8e8d8d;
  text-transform: uppercase;
  display: block;
}
.part_inn p {
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 1em;
  color: #171616;
  font-family: "Roboto", sans-serif;
}
.read_btn {
    margin: 0;
    padding: 8px 30px;
    display: inline-block;
    border: 1px solid #ed1c24;
    border-radius: 30px;
    font-size: 1em;
    color: #ed1c24;
}
.read_btn:hover {
    background: #ed1c24;
    color: #fff;
}
figure {
    margin: 0;
    padding: 40px 10px;
    text-align: center;
}
.modal-container .part_sec .detail {
    margin: 0 0 35px 0;
    padding: 0 10% 0 0;
}
.part_sec .detail p {
    margin: 0 0 15px 0;
    padding: 0;
    font-size: 1em;
    color: #171616;
}
.part_sec .detail h3 {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 28px;
    color: #171616;
    font-family: "helvetica47regularcondensed";
}
.part_sec .detail p a {
    color: #171616;
}
.part_sec .detail p a:hover {
    color: #ed1c24;
}
</style>
