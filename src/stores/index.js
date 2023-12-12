import { defineStore } from "pinia";
import LocalStorageController from "./localStorage";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: "pt",
    isDarkMode: false,
    user: {
      id: 0,
      type: 0,
      name: "not-found",
    },
  }),
  actions: {
    setLang(newLang) {
      this.lang = newLang;
      LocalStorageController.storeLang(newLang);
    },
    setTheme() {
      this.isDarkMode = !this.isDarkMode;
      LocalStorageController.storeTheme(this.isDarkMode);
    },
    setUserData(newUserData) {
      this.user = newUserData;
    },
  },
  getters: {
    getLang: () => this.lang,
    getThemeMode: () => this.isDarkMode,
    getUserData: () => this.user,
  },
});
