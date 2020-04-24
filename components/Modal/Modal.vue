<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container position-relative">
          <div class="modal-header text-right">
            <slot name="header">
                <button class="modal-default-button border-0" @click="$emit('close')"><fa :icon="['fa', 'times']"/></button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <h2>{{text.Label}}</h2>
                        <h3>{{text.Name}}</h3>

                        <div class="modalrichtext" style="margin: 0 0 20px 0;padding: 0;font-size: 14px;color: #171616;" v-html="richtext"></div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div class="legency_block">
                            <figure class="l_logo">
                                <img :src="text.Logo" alt="logo">
                            </figure>
                            <figure>
                                <img :src="text.image1" alt="logo">
                            </figure>
                            <figure>
                                <img :src="text.image2" alt="logo">
                            </figure>
                        </div>
                    </div>
                </div>
            </slot>
          </div>


        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["text"],
  computed: {
    richtext() {
      return this.text.text
        ? this.$storyapi.richTextResolver.render(this.text.text)
        : "";
    }
  }
};
</script>
<style scoped>

.v--modal-overlay {
  background: red !important;
  opacity: 0.9 !important;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  background: rgba(0,0,0,.5);
}

.modal-container {
  max-width: 60%;
  margin: 0px auto;
  padding: 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  font-family:  'Roboto', sans-serif;
  max-height: 90%;
  border-radius: 40px;
}
.modal-header{
    margin: 0 0  1em 0;
    padding: 1em 1.5em;
    border-radius: 30px 30px 0 0;
    border: none;
    display: block;
    background: #efefef;
    width: 100%;

}

.modal-body {
  margin: 20px 0;
  padding: 30px;
}

.modal-body h2 {
    margin: 0 0 25px 0;
    padding: 0;
    font-size: 16px;
    color: #8b8a8a;
    text-transform: uppercase;
}
.modal-body h3 {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 24px;
    color: #171616;
    outline: none !important;
    font-family: "helvetica47lightcondensed";
}

.modal-body p a {
    color: #ed1c24;
}

.modal-body p a:hover {
    color: #171616;
}

.legency_block {
    margin: 0;
    padding: 0;
    text-align: right;
}
.legency_block .l_logo {
    margin: 0 0 30px 0;
    padding: 0;
    display: block;
}




.modal-default-button {

}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
