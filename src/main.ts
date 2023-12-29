import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "@/App.vue";
import { router } from "./routers/routers";
import { vuetify } from "@plugins/vuetify";
const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount("#app");
