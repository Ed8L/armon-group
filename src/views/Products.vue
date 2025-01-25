<template>
  <section class="pt-8 px-4">
    <div class="flex flex-wrap -mx-4">
      <div class="md:w-1/4 px-4 mb-8" v-for="(item, index) in 16" :key="index">
        <img class="rounded shadow-md" :src="getImgUrl(item)" alt="product" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getImgUrl(image) {
      var images = require.context('../assets/img/new/', false, /\.webp$/)
      return images('./' + image + '.webp')
    }
  }
}
</script>

<style scoped>
section {
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
