<template>
  <div class="sidebar-list">
    <h2 class="text-left text-3xl font-semibold mb-5">Xin chào bạn!</h2>
    <SidebarItem
      v-for="item in props.sidebarList"
      :key="item.id"
      :item="item"
    ></SidebarItem>
    <SidebarItem :item="signOutItem" @click="signOut"></SidebarItem>
  </div>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { defineProps } from "vue";
// store
import { useAuth } from "@/stores/auth.store";
const props = defineProps({
  sidebarList: {
    typed: Array,
    required: true,
    default() {
      [];
    },
  },
});

const authStore = useAuth();
const signOutItem = {
  id: 7,
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.74907H18.12C18.9125 2.71374 19.6868 2.99377 20.2734 3.52788C20.86 4.06199 21.2111 4.8067 21.25 5.59907V18.3991C21.2111 19.1914 20.86 19.9362 20.2734 20.4703C19.6868 21.0044 18.9125 21.2844 18.12 21.2491H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9993 12H2.7793" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75 12L6.75 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75 12L6.75 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  label: "Đăng xuất",
  to: {},
};

function signOut() {
  authStore.signOut();
}
</script>

<style lang="scss" scoped></style>
