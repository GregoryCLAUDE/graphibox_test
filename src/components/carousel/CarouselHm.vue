<template id="">
  <div class="carousel">
    <slot></slot>
    <a class="carousel-control-item" href="#carouselExampleControl" role="button" @click.prevent="prev">
      <span class="carousel-control-prev-icon"></span>
      <span>precedent</span>
    </a>
    <a class="carousel-control-item" href="#carouselExampleControl" role="button" @click.prevent="next">
      <span class="carousel-control-prev-icon"></span>
      <span>suivant</span>
    </a>
    <button class="carousel-control-prev" @click.prevent="prev">precedent</button>
    <button class="carousel-control-next" @click.prevent="next">suivant</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'carousel',
  data () {
    return {
      index: 0,
      slides: []
    }
  },

  mounted () {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },

  computed: {
    slidesCount () { return this.slides.length }
  },

  methods: {
    next () {
      this.index++
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    }
  }
}
</script>

<style media="screen">
  .carousel {
    position: relative;

  }
</style>
