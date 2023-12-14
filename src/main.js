import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Translate from "./translate";
import { createPinia } from "pinia";

const app = createApp(App);


/** TRADUTOR */
app.config.globalProperties.$t = Translate.to;
/** TRADUTOR */

/** PINIA */
const pinia = createPinia();
app.use(pinia);
/** PINIA */

/** ROUTER */
app.use(router);
/** ROUTER */

app.mount("#app");
