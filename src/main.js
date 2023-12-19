import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Translate from "./translate";
import { createPinia } from "pinia";
import InitConfig from "./stores/initConfigs";

const app = createApp(App);

/** TRADUTOR */
app.config.globalProperties.$t = Translate.to;
/** TRADUTOR */

/** PINIA */
const pinia = createPinia();
app.use(pinia);
/** PINIA */

/** START CONFIGS */
const data = new InitConfig();
/** START CONFIGS */

/** ROUTER */
app.use(router);
/** ROUTER */

app.mount("#app");
