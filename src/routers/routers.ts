import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routerList";
// import { useAuthStore } from "@/stores/Auth/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   const { checkAuth } = useAuthStore();
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   if (requiresAuth && !checkAuth) {
//     next("/login"); // redirect to login if user is not authenticated
//   } else {
//     next(); // otherwise proceed
//   }
// });

export { router };
