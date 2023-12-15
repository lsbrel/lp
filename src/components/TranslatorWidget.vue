<script>
import { useAppStore } from "../stores/index.js";
import Brazil from "@/icons/flags/pt.png";
import Usa from "@/icons/flags/en.png";
import Spain from "@/icons/flags/es.png";

export default {
  data() {
    return {
      stores: useAppStore(),
      flags: {
        brazil: Brazil,
        usa: Usa,
        spain: Spain,
      },
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
  <div class="absolute top-0 right-0 mt-4 mr-4" style="z-index: 1000">
    <div class="flex flex-row justify-center gap-1">
      <span
        @click="changeLang('pt')"
        class="hover:scale-105 transition-all cursor-pointer"
      >
        <img :src="flags.brazil" />
      </span>
      <span
        @click="changeLang('en')"
        class="hover:scale-105 transition-all cursor-pointer"
      >
        <img :src="flags.usa" />
      </span>
      <span
        @click="changeLang('es')"
        class="hover:scale-105 transition-all cursor-pointer"
      >
        <img :src="flags.spain" />
      </span>
    </div>
  </div>
</template>
