export default class LocalStorageController {
  /**
   * Classe que funciona como uma biblioteca para utilizar o localstorage
   *  seta e remove as configurações básicas do usuario
   *  informações de usuario, tema, linguagem
   */

  /** STORE METHODS */
  static storeLang(lang) {
    localStorage.setItem("lang", lang);
  }

  static storeTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  static storeToken(token) {
    localStorage.setItem("token", token);
  }
  /** STORE METHODS */

  /** RETRIEVE METHODS */
  static getTheme() {
    return localStorage.getItem("theme");
  }

  static getLang() {
    return localStorage.getItem("lang");
  }
  static getToken() {
    return localStorage.getItem("token");
  }
  /** RETRIEVE METHODS */
}
