<template>
  <splide :options="options" class="mb-5 md:mb-0">
    <splide-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="relative rounded-lg"
    >
      <img :src="slide.src" :alt="title" />
      <h2
        class="text-lg md:text-xl lg:text-4xl uppercase text-white rounded-lg
        h-full flex justify-center items-center
        opacity-0 hover:opacity-100 hover:bg-gray-700
        hover:bg-opacity-40 transition duration-500
        transform hover:-translate-y-1 hover:scale-110"
      >
        {{ title }}
      </h2>
    </splide-slide>
  </splide>
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
  font-family: 'Cabin', sans-serif;
}
</style>
