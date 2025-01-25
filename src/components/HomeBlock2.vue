<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="title flex-1 uppercase flex justify-center items-center text-4xl"
      :class="{ 'order-last': orderLast }"
    >
      {{ title }}
    </div>
    <splide :options="options" class="img flex-1">
      <splide-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" :alt="title" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  components: {
    Splide,
    SplideSlide
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    orderLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: {
        type: 'fade',
        rewind: true,
        arrows: false,
        pagination: false,
        autoplay: true,
        keyboard: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        drag: false,
        interval: 3000,
        speed: 2000,
        heightRatio: 0.5,
        cover: true,
        breakpoints: {
          768: {
            heightRatio: 0.9
          }
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: 'Quicksand', sans-serif;
}
</style>
