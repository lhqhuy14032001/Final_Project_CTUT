import { defineStore } from "pinia";
import { ref } from "vue";
export const useState = defineStore("stateStore", () => {
  const isShowMobileMenu = ref(false);
  const isLoading = ref(false);
  const isShowModalSignUp = ref(false);
  const isShowModalSignIn = ref(false);
  const isShowModalConfirmEmail = ref(false);

  function onToggleMenuMobile() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
  function onToggleloading() {
    this.isLoading = !this.isLoading;
  }
  function onToggleModalSignUp() {
    this.isShowModalSignUp = !this.isShowModalSignUp;
  }
  function onToggleModalSignIn() {
    this.isShowModalSignIn = !this.isShowModalSignIn;
  }

  function onToggleModalCofirmEmail() {
    isShowModalConfirmEmail.value = !isShowModalConfirmEmail.value;
  }

  return {
    isLoading,
    isShowMobileMenu,
    isShowModalConfirmEmail,
    onToggleMenuMobile,
    onToggleloading,
    isShowModalSignUp,
    onToggleModalSignUp,
    isShowModalSignIn,
    onToggleModalSignIn,
    onToggleModalCofirmEmail,
  };
});
