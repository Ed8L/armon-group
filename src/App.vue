<template>
  <div id="app" class="h-screen flex flex-col justify-between">
    <Navbar />
    <div>
      <router-view class="mb-auto" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style src="@/assets/css/style.css" />
