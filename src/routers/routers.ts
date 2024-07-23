import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routerList";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router };
