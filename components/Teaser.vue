<template>
  <div v-editable="blok" class="teaser">
    <component v-if="slide" :blok="slide" :is="slide.component"></component>
    <div class="teaser__pag">
      <button @click="handleDotClick(index)"
              :key="index"
              v-for="(blok, index) in blok.body"
              :class="{'teaser__pag-dot--current': index == currentSlide}"
              class="teaser__pag-dot">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],

  data () {
    return {
      currentSlide: 0
    }
  },

  computed: {
    slide () {
      let slides = this.blok.body.filter((partner, index) => {
        return this.currentSlide === index
      })
      if (slides.length) {
        return slides[0]
      }
      return null
    }
  },

  methods: {
    handleDotClick (index) {
      this.currentSlide = index
    }
  }
}
</script>

<style lang="scss">
.teaser__pag {
  width: 100%;
  text-align: center;
  margin: 30px 0;
}

.teaser__pag-dot {
  display: none;
}
</style>
