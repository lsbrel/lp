import en from "./locales/en.json";
import pt from "./locales/pt.json";

export default class Translate {
  static to(key) {
    const lang = "pt"; // colocal o lang no local storage
    return eval(lang)[key]; // EVAL precisa ser trocado é perigoso
  }
}
