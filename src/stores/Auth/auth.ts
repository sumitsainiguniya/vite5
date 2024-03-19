import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "./auth.interface";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>();
  const checkAuth = computed(() => {
    return user.value !== undefined;
  });
  return { user, checkAuth };
});
