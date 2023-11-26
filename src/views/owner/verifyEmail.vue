<template>
  <Header></Header>
  <div
    class="mx-auto flex flex-col items-center text-2xl text-black min-h-[500px]"
  >
    <div>Chúc mừng! Bạn đã xác nhận e-mail thành công.</div>
    <router-link :to="{ name: 'home', params: {} }">Trang chủ</router-link>
  </div>
  <Footer></Footer>
</template>

<script setup>
// components
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
// router
// store
import { useUser } from "@/stores/user.store";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const userStore = useUser();
// email to update state
const emailReceived = router.currentRoute.value.params.email;
onMounted(async () => {
  await userStore.onUpdateStatusEmail(emailReceived);
  router.push({ name: "accountInfo", params: {} });
});
</script>

<style lang="scss" scoped></style>
