<template id="">
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!--slide 1-->
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../photos/slide/graphibox_SLIDE1.jpg" alt="slide1">
        </template>
      </b-carousel-slide>

      <!-- Slide2 -->
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../photos/slide/graphibox_SLIDE2.jpg" alt="slide2">
        </template>
      </b-carousel-slide>

      <!-- Slide3 -->
      <b-carousel-slide>
        <template v-slot:mg>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../photos/slide/graphibox_SLIDE3.jpg" alt="slide3">
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
