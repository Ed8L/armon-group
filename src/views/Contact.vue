<template>
  <section class="h-full p-10">
    <div class="title text-center">
      <h3 class="title text-3xl uppercase">
        <h1>
          {{ $t('contact.title') }}
        </h1>
      </h3>
    </div>
    <div
      class="contact-us mt-10 container mx-auto min-w-full lg:flex lg:flex-row"
    >
      <div class="info p-4 space-y-16 flex flex-col lg:flex-1">
        <div
          class="location flex flex-col items-center text-center tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p class="uppercase">{{ $t('contact.address.title') }}:</p>
          <p>{{ $t('contact.address.address') }}</p>
        </div>
        <div class="email flex flex-col items-center text-center tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p class="uppercase">{{ $t('contact.mail') }}:</p>
          <p>info@armon-group.com</p>
        </div>
        <div class="phone flex flex-col items-center text-center tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p class="uppercase">{{ $t('contact.call') }}:</p>
          <p>+996 (557) 60 27 79</p>
        </div>
      </div>
      <div class="map h-64 lg:h-auto lg:flex-1">
        <yandex-map
          :settings="settings"
          :coords="coords"
          :zoom="17"
          class="h-full"
        >
          <ymap-marker
            marker-id="123"
            :coords="coords"
            hint-content="We are here"
          />
        </yandex-map>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      settings: {
        apiKey: '8920307e-ea05-4aaa-b3e6-e7bea6c97c33',
        lang: 'en_US'
      },
      coords: [42.871007, 74.604473]
    }
  }
}
</script>

<style scoped>
.title {
  color: #393e46;
}
</style>
