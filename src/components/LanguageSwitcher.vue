<template>
  <div class="relative py-2 px-2 md:p-0 lg:py-2 lg:px-2">
    <button
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img :src="localeFlag" alt="flag" class="w-8 h-8" />
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        v-on-clickaway="hideDropdown"
        class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded border mt-2 py-1 lg:z-20 lg:w-32"
      >
        <li>
          <router-link
            :to="{ name: 'lang', params: { lang: 'en' } }"
            class="flex items-center px-3 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../assets/img/flag_en.png"
              alt="flag"
              class="w-8 h-8 md:w-5 md:h-5 lg:w-8 lg:h-8"
            />
            <span class="ml-2">English</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'lang', params: { lang: 'ru' } }"
            class="flex items-center px-3 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../assets/img/flag_ru.png"
              alt="flag"
              class="w-8 h-8 md:w-5 md:h-5 lg:w-8 lg:h-8"
            />
            <span class="ml-2 text-sm">Русский</span>
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import i18n from '../i18n'

export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      myLocale: i18n.locale
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  },
  computed: {
    localeFlag() {
      const img = require(`@/assets/img/flag_${this.myLocale}.png`)
      return img
    }
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

option {
  text-align: right;
}
</style>
