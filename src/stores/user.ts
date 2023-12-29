import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userRole = ref(false);
  const changeRole = () => {
    userRole.value = !userRole.value;
  };
  return { userRole, changeRole };
});
