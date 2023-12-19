import LocalStorageController from "./localStorage";
import { useAppStore } from ".";

export default class InitConfig {
  /** DEFAULT START DATA */
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
  }
}
