import { defineStore } from "pinia";
import LocalStorageController from "@lib/LocalStorage";
import Request from "@lib/Request";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: "pt",
    isDarkMode: false,
    loading: false,
    layout: "control",
    token: false,
    api: undefined,
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
    setLayout(value) {
      this.layout = value;
    },
    setToken(value) {
      this.token = value;
    },
    setApi() {
      this.api = new Request();
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
    getLayout() {
      return this.layout;
    },
    getToken() {
      return this.token;
    },
    getApi() {
      return this.api;
    },
  },
});
