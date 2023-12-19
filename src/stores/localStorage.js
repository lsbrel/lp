export default class LocalStorageController {
  /**
   * Classe que funciona como uma biblioteca para utilizar o localstorage
   *  seta e remove as configurações básicas do usuario
   *  informações de usuario, tema, linguagem
   */

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
