import { defineStore } from "pinia";
import { ref } from "vue";
export const useState = defineStore("stateStore", () => {
  const isShowMobileMenu = ref(false);
  const isLoading = ref(false);

  function onToggleMenuMobile() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
  function onToggleloading() {
    this.isLoading = !this.isLoading;
  }

  return {
    isLoading,
    isShowMobileMenu,
    onToggleMenuMobile,
    onToggleloading,
  };
});
