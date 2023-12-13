<script>
import { useAppStore } from "../../../stores";

export default {
  data() {
    return {
      stores: useAppStore(),
    };
  },
  methods: {
    changeLang() {
      this.stores.setLang("en");
    },
  },
};
</script>
<template>
  <div class="w-full md:w-10/12 2xl:w-11/12 h-full bg-kwhite p-5">
    <div class="">
      <div class="col-12">{{ $t("credentialsError") }}</div>
      <button
        @click="changeLang"
        class="bg-success text-white shadow-lg p-2 rounded hover:bg-green-300"
      >
        Mudar linguagem
      </button>
    </div>
  </div>
</template>
