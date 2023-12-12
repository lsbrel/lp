export default class LocalStorageController {
  static storeLang(lang) {
    localStorage.setItem("lang", lang);
  }

  static storeTheme(theme) {
    localStorage.setItem("theme", theme);
  }
}
