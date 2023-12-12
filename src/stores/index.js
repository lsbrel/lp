import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: "pt",
  }),
  actions: {
    setLang(newLang) {
      this.lang = newLang;
    },
  },
  getters: {
    getLang() {
      return this.lang;
    },
  },
});
