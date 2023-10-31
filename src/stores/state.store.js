import { defineStore } from "pinia";
import { ref } from "vue";
export const useState = defineStore("stateStore", () => {
  const isShowMobileMenu = ref(false);
  const isLoading = ref(false);
  const isShowModalSignUp = ref(false);

  function onToggleMenuMobile() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
  function onToggleloading() {
    this.isLoading = !this.isLoading;
  }
  function onToggleModalSignUp() {
    this.isShowModalSignUp = !this.isShowModalSignUp;
  }

  return {
    isLoading,
    isShowMobileMenu,
    onToggleMenuMobile,
    onToggleloading,
    isShowModalSignUp,
    onToggleModalSignUp,
  };
});
