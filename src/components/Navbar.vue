<template>
  <header class="p-5">
    <div
      class="container mx-auto md:items-center flex justify-between md:flex-row"
    >
      <nav class="hidden md:flex flex-wrap items-center lg:w-2/5 md:ml-auto">
        <NavLink :name="$t('nav.home')" :link="`/${$i18n.locale}/`" />
        <NavLink :name="$t('nav.about')" :link="`/${$i18n.locale}/about`" />
        <NavLink
          :name="$t('nav.products')"
          :link="`/${$i18n.locale}/products`"
        />
        <NavLink :name="$t('nav.contact')" :link="`/${$i18n.locale}/contact`" />
      </nav>
      <Logo />

      <!-- Mobile button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div class="lg:w-2/5 lg:justify-end ml-5 lg:ml-0 hidden md:flex">
        <LanguageSwitcher />
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="hidden md:hidden mt-2" ref="mobileMenu">
      <NavLink :name="$t('nav.home')" :link="`/${$i18n.locale}/`" />
      <NavLink :name="$t('nav.about')" :link="`/${$i18n.locale}/about`" />
      <NavLink :name="$t('nav.products')" :link="`/${$i18n.locale}/products`" />
      <NavLink :name="$t('nav.contact')" :link="`/${$i18n.locale}/contact`" />
      <LanguageSwitcher />
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import NavLink from '@/components/navbar/NavLink.vue'
import Logo from '@/components/navbar/Logo.vue'

export default {
  components: {
    LanguageSwitcher,
    NavLink,
    Logo
  },
  methods: {
    toggleMenu() {
      this.$refs.mobileMenu.classList.toggle('hidden')
    }
  },
  watch: {
    $route() {
      this.$refs.mobileMenu.classList.toggle('hidden')
    }
  }
}
</script>

<style scoped>
header {
  background-color: #fff;
}
nav a {
  font-family: 'Cabin', sans-serif;
}

.logo {
  font-family: 'Cabin', sans-serif;
}

.nav-link {
  text-transform: uppercase;
}
</style>
