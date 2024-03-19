import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingStore = defineStore("setting", () => {
  const sideBarDrawer = ref(false);
  const changeSideBarDrawer = () => {
    sideBarDrawer.value = !sideBarDrawer.value;
  };
  return { sideBarDrawer, changeSideBarDrawer };
});
