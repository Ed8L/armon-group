<template>
  <router-link
    :to="link"
    class="py-2 px-2 md:p-0 text-sm md:mr-5 block nav-link"
    :class="{ 'md:border-b md:border-black': $route.path === link }"
  >
    {{ name }}
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
