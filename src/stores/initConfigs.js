import LocalStorageController from "@lib/LocalStorage";
import { useAppStore } from ".";

export default class InitConfig {
  /**
   * Classe que busca e seta em sessão reativa(Pinia) as escolhas esteticas e de acessibilidade do usuario
   * tema, linguagem
   *
   */

  lang = "pt";
  theme = "light";
  constructor() {
    this.getConfigs();
    this.setConfigs();
  }

  getConfigs() {
    this.theme = LocalStorageController.getTheme() ?? "light";
    this.lang = LocalStorageController.getLang() ?? "pt";
  }
  setConfigs() {
    useAppStore().setTheme(this.theme);
    useAppStore().setLang(this.lang);
    useAppStore().setApi();
  }
}
