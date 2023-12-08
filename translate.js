export default class Translate {
  static to(key) {
    var response;
    try {
      const data = fetch("src/locales/pt.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          response.text = data[key];
          return response.text;
          // console.log(response.text);
        });
      (async () => {
        response.text = await data;
      })();
    } catch {}
    console.log(response);
    return response;
  }
}
