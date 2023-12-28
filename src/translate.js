import { useAppStore } from "./stores";
import en from "./locales/en.json";
import pt from "./locales/pt.json";
import es from "./locales/es.json";

export default class Translate {
  static to(key) {
    const stores = useAppStore();
    const lang = stores.getLang; // esse valor precisa vir de localstorage
    try {
      if (lang == "pt") {
        return pt[key];
      } else if (lang == "es") {
        return es[key];
      } else if (lang == "en") {
        return en[key];
      } else {
        return key;
      }
    } catch {
      console.error("Erro ao buscar tradução");
    }
  }
}
