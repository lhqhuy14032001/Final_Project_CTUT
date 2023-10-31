<template>
  <div class="account-wrapper">
    <Header></Header>
    <div class="account-body grid grid-cols-12 gap-4 my-8">
      <div class="account-nav col-span-3">
        <SideBarUserAccount></SideBarUserAccount>
      </div>
      <div class="detail-info col-span-9">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
// component
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
import SideBarUserAccount from "@/components/clients/SidebarUserAccount";
// store
// import { useAuth } from "@/stores/auth.store";
// import { storeToRefs } from "pinia";
// build-in package

// const authStore = useAuth();
// const { signUpInfo } = storeToRefs(authStore);
// const _uid = signUpInfo.value.user.uid;

// function signOut() {
//   authStore.signOut(_uid);
// }
</script>

<style lang="scss" scoped></style>
