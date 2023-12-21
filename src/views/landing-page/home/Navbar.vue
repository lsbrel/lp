<script>
/** LIBS */
import Request from "@lib/Request";
/** LIBS */
import NavbarGroupButtons from "@components/home/NavbarGroupButtons.vue"

export default {
  components: {
    NavbarGroupButtons
  },
  data() { },
  methods: {
    login() {
      const data = new Request();
      this.$router.push("/dashboard");
    },
  },
};
</script>
<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#market">{{ $t("market") }}</a>
      </div>
      <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
        id="example-collapse-navbar">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#about"><i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
              {{ $t("about-us") }}</a>
          </li>
        </ul>
        <NavbarGroupButtons @login="login()" />
      </div>
    </div>
  </nav>
</template>
