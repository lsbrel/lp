<script>
import { useAppStore } from "../../../stores";

export default {
  data() {
    return {
      stores: useAppStore(),
    };
  },
  methods: {
    changeLang(lang) {
      this.stores.setLang(lang);
    },
  },
};
</script>
<template>
  <div class="w-full md:w-10/12 2xl:w-11/12 h-full bg-kwhite p-5">
    <div class="">
      <div class="col-12">{{ $t("credentialsError") }}</div>
      <button
        @click="changeLang('pt')"
        class="bg-green-600 text-white shadow-lg p-2 rounded hover:bg-green-300"
      >
        {{ $t("portuguese") }}
      </button>
      <button
        @click="changeLang('en')"
        class="bg-red-600 text-white shadow-lg p-2 rounded hover:bg-green-300"
      >
        {{ $t("english") }}
      </button>
      <button
        @click="changeLang('es')"
        class="bg-yellow-500 text-white shadow-lg p-2 rounded hover:bg-green-300"
      >
        {{ $t("spanish") }}
      </button>
    </div>
  </div>
</template>
