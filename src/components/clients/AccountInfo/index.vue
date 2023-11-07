<template>
  <div class="account-info min-w-full min-h-full px-8 py-6">
    <HeaderAccount></HeaderAccount>
    <div class="account-info-body grid grid-cols-12 mt-10">
      <div class="col-span-4">
        <AvatarUser :username="user.fullname"></AvatarUser>
      </div>
      <div class="col-span-8 my-auto">
        <InFo :phonenumber="user.phonenumber" :email="user.email"></InFo>
      </div>
    </div>
  </div>
</template>

<script setup>
// component
import HeaderAccount from "./components/HeaderAccount.vue";
import AvatarUser from "./components/AvatarUser.vue";
import InFo from "./components/Info.vue";
import { getCookie } from "@/ultils/functions";
const user = JSON.parse(getCookie("_us"));
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
