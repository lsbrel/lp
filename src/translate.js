import en from "./locales/en.json";
import pt from "./locales/pt.json";
import es from "./locales/es.json";

export default class Translate {
  static to(key) {
    const lang = localStorage.getItem("lang"); // esse valor precisa vir de localstorage
    console.log(lang);
    try {
      if (lang == "pt") {
        return pt[key];
      } else if (lang == "es") {
        return es[key];
      } else {
        return en[key];
      }
    } catch {
      console.error("Erro ao buscar tradução");
    }
  }
}
