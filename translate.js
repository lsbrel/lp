export default class Translate {
  static async to(key) {
    try {
      const response = await fetch("src/locales/pt.json");
      const data = await response.json();
      console.log(data[key].toString());
      return data[key] || "vazio";
    } catch (error) {
      console.error("Error fetching or parsing JSON:", error);
      return "vazio";
    }
  }
}
