<script>
/** HOME COMPONENTS */
import Navbar from "@landing/home/Navbar.vue";
import Banner from "@landing/home/Banner.vue";
import Cards from "@landing/home/Cards.vue";
import Midsection2 from "@landing/home/Midsection2.vue";
import Midsection3 from "@landing/home/Midsection3.vue";
import Midsection4 from "@landing/home/Midsection4.vue";
import Midsection5 from "@landing/home/Midsection5.vue";
import Footer from "@landing/home/Footer.vue";
import FloatingWidget from "@components/helpers/FloatingWidget.vue";
/** HOME COMPONENTS */

export default {
  components: {
    Navbar,
    Banner,
    Cards,
    Midsection2,
    Midsection3,
    Midsection4,
    Midsection5,
    Footer,
    FloatingWidget,
  },
  date() {
    return {};
  },
};
</script>
<template>
  <div>
    <div class="text-gray-800 antialiased">
      <FloatingWidget />
      <Navbar />
      <Banner />
      <Cards />
      <Midsection2 />
      <Midsection3 />
      <Midsection4 />
      <Midsection5 />
      <Footer />
    </div>
  </div>
</template>
