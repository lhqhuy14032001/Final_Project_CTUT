<template>
  <div
    class="pt-10 container h-full bg-gray-100 fixed flex flex-col justify-between responsive-menu-mobile"
  >
    <div class="flex m-4 justify-end">
      <div class="rounded-full border border-gray-200">
        <XMarkIcon @click="onCloseMenu" class="p-2 w-8 h-8 text-black" />
      </div>
    </div>
    <div class="flex-grow">
      <!-- Start Account Info v-else @close-menu="onCloseMenu"-->
      <AccountInfoMobile
        v-if="isLoggedIn"
        @onLogout="onLogout"
        :fullname="signUpInfo.fullname"
      ></AccountInfoMobile>
      <!-- End Account Info -->

      <!-- Start Login @close-menu="onCloseMenu" -->
      <Login v-else @onLogin="onLogin"></Login>
      <!-- End Login -->
    </div>
  </div>
</template>
<script setup>
// import { defineEmits } from "vue";
import { useAuth } from "@/stores/auth.store";
import { useState } from "@/stores/state.store";
import { XMarkIcon } from "@heroicons/vue/24/outline";
// import { computed } from "vue";
import AccountInfoMobile from "./components/AccountInfoMobile";
import Login from "./components/Login";
import { storeToRefs } from "pinia";

const authStore = useAuth();
const stateStore = useState();

const { signUpInfo, isLoggedIn } = storeToRefs(authStore);

const onCloseMenu = () => {
  stateStore.onToggleMenuMobile();
};
// let isLoggedIn = computed(() => {
//   return authStore.isLoggedIn;
// });
authStore.$subscribe((mutation, state) => {
  isLoggedIn.value = state.isLoggedIn;
});
const onLogin = () => {
  authStore.onChangeStateIsLoggedIn(true);
};
const onLogout = () => {
  authStore.onChangeStateIsLoggedIn(false);
};
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
