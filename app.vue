<template>
  <div class="wrapper">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/HeaderComponent/Header.vue";
import Footer from "~/components/FooterComponent/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
