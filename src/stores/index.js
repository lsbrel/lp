import { defineStore } from "pinia";
import LocalStorageController from "./localStorage";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: "pt",
    isDarkMode: false,
    loading: false,
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
    setTheme(theme) {
      this.isDarkMode = !this.isDarkMode;
      LocalStorageController.storeTheme(theme);
      if (theme == "dark") {
        document.querySelector("body")?.classList.add("dark");
      } else {
        document.querySelector("body")?.classList.remove("dark");
      }
    },
    setUserData(newUserData) {
      this.user = newUserData;
    },
    setLoading(value) {
      this.loading = value;
    },
  },
  getters: {
    getLang() {
      return this.lang;
    },
    getThemeMode() {
      return this.isDarkMode;
    },
    getUserData() {
      return this.user;
    },
    getLoading() {
      return this.loading;
    },
  },
});
