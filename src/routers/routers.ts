import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routerList";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router };
