import en from "./locales/en.json";
import pt from "./locales/pt.json";

export default class Translate {
  static to(key) {
    const lang = localStorage.getItem("lang"); // esse valor precisa vir de localstorage
    console.log(lang);
    try {
      if (lang == "pt") {
        return pt[key];
      } else {
        return en[key];
      }
    } catch {
      console.error("Erro ao buscar tradução");
    }
  }
}
