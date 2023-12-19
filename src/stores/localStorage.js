export default class LocalStorageController {
  static storeLang(lang) {
    localStorage.setItem("lang", lang);
  }

  static storeTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  static getTheme() {
    return localStorage.getItem("theme");
  }

  static getLang() {
    return localStorage.getItem("lang");
  }
}
