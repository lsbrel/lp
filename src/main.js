import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Translate from "./translate";

const app = createApp(App);

/** TRADUTOR */
app.config.globalProperties.$t = Translate.to;
/** TRADUTOR */

app.use(router);

app.mount("#app");
