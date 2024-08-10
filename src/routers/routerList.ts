import { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () =>
      defineAsyncComponent(() => import("@views/user/UserList.vue")),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      defineAsyncComponent(() => import("@views/auth/login.vue")),
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      defineAsyncComponent(() => import("@views/auth/register.vue")),
    meta: { requiresAuth: false },
  },
];

export { routes };
