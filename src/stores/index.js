import { defineStore } from "pinia";
import LocalStorageController from "./localStorage";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: "pt",
    isDarkMode: false,
  }),
  actions: {
    setLang(newLang) {
      this.lang = newLang;
      LocalStorageController.setLang(newLang);
    },
    setTheme() {
      this.isDarkMode = !this.isDarkMode;
      LocalStorageController.setTheme(this.isDarkMode);
    },
  },
  getters: {
    getLang() {
      return this.lang;
    },
    getThemeMode() {
      return this.isDarkMode;
    },
  },
});
