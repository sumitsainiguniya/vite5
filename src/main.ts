import { createApp } from "vue";
import { pinia } from "@plugins/pinia";
import "./style.css";
import App from "@/App.vue";
import { router } from "./routers/routers";
import { vuetify } from "@plugins/vuetify";
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
