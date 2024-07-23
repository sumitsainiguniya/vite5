import { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => defineAsyncComponent(() => import("@views/user/UserList.vue")),
    meta: { requiresAuth: true },
  },
];

export { routes };
