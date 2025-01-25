<template>
  <footer class="text-white">
    <div
      class="container p-5 mx-auto flex items-center sm:flex-row flex-col space-y-4 md:space-y-0"
    >
      <a class="flex font-medium items-center md:justify-start justify-center">
        <span class="ml-3 text-xl">Armon Group LLC</span>
      </a>
      <p
        class="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
      >
        {{ new Date().getFullYear() }}
      </p>
      <nav
        class="flex lg:w-2/5 flex-wrap items-center md:ml-auto space-x-3 lg:space-x-8"
      >
        <a
          :href="`/${$i18n.locale}/home2`"
          :class="{ 'border-b border-white': $route.name === 'home2' }"
          >{{ $t('nav.home') }}</a
        >
        <a
          :href="`/${$i18n.locale}/about`"
          :class="{ 'border-b border-white': $route.name === 'about' }"
          >{{ $t('nav.about') }}</a
        >
        <a
          :href="`/${$i18n.locale}/products`"
          :class="{ 'border-b border-white': $route.name === 'products' }"
          >{{ $t('nav.products') }}</a
        >
        <a
          :href="`/${$i18n.locale}/contact`"
          :class="{ 'border-b border-white': $route.name === 'contact' }"
          >{{ $t('nav.contact') }}</a
        >
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #094970;
}
</style>
