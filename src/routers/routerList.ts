import { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => defineAsyncComponent(() => import("@views/Home.vue")),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: () =>
      defineAsyncComponent(() => import("@views/Auth/Login.vue")),
  },
];

export { routes };
