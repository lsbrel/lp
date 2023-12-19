<script>
import { useAppStore } from "@/stores/index.js";
import Dark from "@/icons/themes/dark.png";
import Light from "@/icons/themes/light.png";
export default {
  data() {
    return {
      stores: useAppStore(),
      icons: {
        dark: Dark,
        light: Light,
      },
    };
  },
  methods: {
    changeTheme(theme) {
      this.stores.setTheme(theme);
    },
  },
};
</script>
<template>
  <div class="flex flex-row justify-center gap-1">
    <span
      @click="changeTheme('dark')"
      class="hover:scale-105 transition-all cursor-pointer"
    >
      <img :src="icons.dark" />
    </span>
    <span
      @click="changeTheme('light')"
      class="hover:scale-105 transition-all cursor-pointer"
    >
      <img :src="icons.light" />
    </span>
  </div>
</template>
