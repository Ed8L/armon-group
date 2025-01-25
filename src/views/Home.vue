<template>
  <div>
    <section class="p-3 md:px-10 md:pb-10 md:grid md:grid-cols-2 md:gap-1">
      <HomeBlock :slides="agriculture.slides" :title="agriculture.title" />
      <HomeBlock :slides="mining.slides" :title="mining.title" />
      <HomeBlock :slides="logistics.slides" :title="logistics.title" />
      <HomeBlock :slides="importExport.slides" :title="importExport.title" />
    </section>
  </div>
</template>

<script>
import HomeBlock from '../components/HomeBlock.vue'
import i18n from '../i18n'

export default {
  components: { HomeBlock },
  data() {
    return {
      agriculture: {
        title: i18n.messages[i18n.locale].home.agriculture,
        slides: [
          {
            src: require('../assets/img/agriculture/1.webp')
          },
          {
            src: require('../assets/img/agriculture/2.webp')
          },
          {
            src: require('../assets/img/agriculture/3.webp')
          },
          {
            src: require('../assets/img/agriculture/4.webp')
          },
          {
            src: require('../assets/img/agriculture/5.webp')
          },
          {
            src: require('../assets/img/agriculture/6.webp')
          },
          {
            src: require('../assets/img/agriculture/7.webp')
          },
          {
            src: require('../assets/img/agriculture/8.webp')
          }
        ]
      },
      mining: {
        title: i18n.messages[i18n.locale].home.mining,
        slides: [
          {
            src: require('../assets/img/mining/1.webp')
          },
          {
            src: require('../assets/img/mining/2.webp')
          },
          {
            src: require('../assets/img/mining/3.webp')
          },
          {
            src: require('../assets/img/mining/4.webp')
          },
          {
            src: require('../assets/img/mining/5.webp')
          },
          {
            src: require('../assets/img/mining/6.webp')
          },
          {
            src: require('../assets/img/mining/7.webp')
          },
          {
            src: require('../assets/img/mining/8.webp')
          }
        ]
      },
      logistics: {
        title: i18n.messages[i18n.locale].home.logistics,
        slides: [
          {
            src: require('../assets/img/logistics/1.webp')
          },
          {
            src: require('../assets/img/logistics/2.webp')
          },
          {
            src: require('../assets/img/logistics/3.webp')
          },
          {
            src: require('../assets/img/logistics/4.webp')
          },
          {
            src: require('../assets/img/logistics/5.webp')
          },
          {
            src: require('../assets/img/logistics/6.webp')
          },
          {
            src: require('../assets/img/logistics/7.webp')
          },
          {
            src: require('../assets/img/logistics/8.webp')
          }
        ]
      },
      importExport: {
        title: i18n.messages[i18n.locale].home.import_export,
        slides: [
          {
            src: require('../assets/img/import_export/1.webp')
          },
          {
            src: require('../assets/img/import_export/2.webp')
          },
          {
            src: require('../assets/img/import_export/3.webp')
          },
          {
            src: require('../assets/img/import_export/4.webp')
          },
          {
            src: require('../assets/img/import_export/5.webp')
          },
          {
            src: require('../assets/img/import_export/6.webp')
          },
          {
            src: require('../assets/img/import_export/7.webp')
          },
          {
            src: require('../assets/img/import_export/8.webp')
          }
        ]
      }
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
