<template>
  <section class="overflow-hidden">
    <div
      class="container mx-auto flex flex-col"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div class="about-us lg:h-screen p-10 lg:p-44">
        <h1 class="title text-4xl md:text-5xl uppercase">
          {{ $t('about.title') }}
        </h1>
        <p class="mt-5 text-xl lg:text-3xl">{{ $t('about.main-text') }}</p>
      </div>
    </div>

    <section class="imports bg-gray-100">
      <div class="p-10 flex flex-col lg:flex-row justify-between">
        <img
          src="../assets/img/about_us/import.webp"
          class="lg:w-1/2 hidden lg:block rounded-lg"
          alt="import"
        />
        <div
          class="imports_list w-full"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <h2
            class="text-3xl md:text-4xl text-center md:mt-10 lg:mt-0 lg:text-right"
          >
            {{ $t('about.imports.title') }}
          </h2>
          <ul class="list-disc mt-5 lg:mt-0 md:ml-10">
            <li
              class="text-xl p-1 md:p-3"
              v-for="(item, index) in $t('about.imports.imports')"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="exports bg-gray-100">
      <div class="p-10 flex flex-col lg:flex-row justify-between">
        <img
          src="../assets/img/about_us/export.webp"
          class="lg:w-1/2 hidden lg:block order-last rounded-lg"
          alt="import"
        />
        <div
          class="exports_list w-full"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h2
            class="text-3xl md:text-4xl text-center md:mt-10 lg:mt-0 lg:text-left"
          >
            {{ $t('about.exports.title') }}
          </h2>
          <ul class="list-disc list-right mt-5 lg:mt-0 md:ml-10 lg:text-right">
            <li
              class="text-xl p-1 md:p-3"
              v-for="(item, index) in $t('about.exports.exports')"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="benefits container mx-auto flex flex-col">
      <div class="about-us lg:h-screen p-10">
        <h2
          class="text-xl lg:text-3xl"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {{ $t('about.benefits.main-text') }}
        </h2>
        <h3
          class="mt-5 mb-1 lg:mb-5 text-xl text-center italic lg:text-3xl"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {{ $t('about.benefits.sub-text') }}
        </h3>
        <ul class="list-disc md:grid md:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(item, index) in $t('about.benefits.benefits')"
            :key="index"
            class="py-2 lg:text-xl lg:p-7"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  created() {
    AOS.init({
      once: true
    })
  }
}
</script>

<style scoped>
section {
  font-family: 'Cabin', sans-serif;
}

.title {
  color: #393e46;
}

.list-right {
  list-style-position: inside;
}

.benefits h2 {
  color: #1178b8;
}
</style>
