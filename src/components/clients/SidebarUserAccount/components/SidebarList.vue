<template>
  <div class="sidebar-list">
    <h2 class="text-left text-3xl font-semibold mb-5">Xin chào bạn!</h2>
    <SidebarItem
      v-for="item in props.sidebarList"
      :key="item.id"
      :item="item"
    ></SidebarItem>

    <a
      :href="linkDown"
      download
      class="sidebar-item flex p-4 gap-2 border-t hover:border-l-4 hover:border-l-primary hover:bg-gray-50"
    >
      <div class="icon-wrapper">
        <div v-html="sampleContract.icon"></div>
      </div>
      <div class="sidebar-label">
        {{ sampleContract.label }}
      </div>
    </a>

    <SidebarItem :item="signOutItem" @click="signOut"></SidebarItem>
  </div>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { defineProps, ref } from "vue";
import { downloadFile } from "@/firebase/downloadContract";
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
const sampleContract = {
  id: 8,
  icon: '<svg fill="#000000" height="22" width="23" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 307.454 307.454" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_5_29_"> <g> <g> <g> <path d="M241.19,200.541c0,2.691-2.201,4.895-4.893,4.895H71.158c-2.693,0-4.895-2.203-4.895-4.895v-3.261 c0-2.691,2.201-4.894,4.895-4.894h165.139c2.691,0,4.893,2.202,4.893,4.894L241.19,200.541L241.19,200.541z"></path> </g> <g> <path d="M140.219,64.99c0,2.69-2.201,4.893-4.895,4.893H71.158c-2.693,0-4.895-2.202-4.895-4.893v-3.263 c0-2.691,2.201-4.894,4.895-4.894h64.166c2.693,0,4.895,2.202,4.895,4.894V64.99z"></path> </g> <g> <path d="M238.713,245.727c0,2.69-2.203,4.892-4.897,4.892H169.65c-2.693,0-4.895-2.202-4.895-4.892v-3.263 c0-2.691,2.201-4.894,4.895-4.894h64.166c2.693,0,4.897,2.202,4.897,4.894V245.727z"></path> </g> <g> <path d="M174.238,110.172c0,2.691-2.201,4.895-4.893,4.895H71.157c-2.693,0-4.895-2.203-4.895-4.895v-3.261 c0-2.691,2.201-4.893,4.895-4.893h98.188c2.691,0,4.893,2.202,4.893,4.893V110.172z"></path> </g> <g> <path d="M241.19,155.357c0,2.691-2.201,4.893-4.893,4.893H71.158c-2.693,0-4.895-2.202-4.895-4.893v-3.262 c0-2.691,2.201-4.894,4.895-4.894h165.139c2.691,0,4.893,2.202,4.893,4.894L241.19,155.357L241.19,155.357z"></path> </g> </g> <path d="M272.401,74.521L193.278,9.454C186.727,4.062,175.389,0,166.907,0H42.442c-10.76,0-19.516,8.754-19.516,19.516 c0,0,0,210.024,0,267.839c0,20.099,19.01,20.099,19.463,20.099c48.34,0,222.623,0,222.623,0c10.762,0,19.516-8.755,19.516-19.517 V100.198C284.528,91.247,279.313,80.207,272.401,74.521z M187.867,29.475c0-4.781,3.959-1.113,3.959-1.113l62.717,53.585 c0,0,4.014,3.949-2.865,3.949c-14.688,0-58.746,0-58.746,0c-2.793,0-5.065-2.271-5.065-5.064 C187.867,80.832,187.867,42.315,187.867,29.475z M265.012,292.999c0,0-179.055,0-223.99,0c-0.801,0-3.643-0.229-3.643-4.182 c0-54.407,0-269.302,0-269.302c0-2.745,2.32-5.063,5.063-5.063h124.464c2.107,0,6.51,1.118,6.51,7.138v59.242 c0,10.761,8.754,19.516,19.516,19.516h73.523c1.342,0,3.613,0.922,3.613,4.169c0,0.051,0.008,183.419,0.008,183.419 C270.076,290.729,267.805,292.999,265.012,292.999z"></path> </g> </g> </g> </g></svg>',
  label: "Tải mẫu hợp đồng",
  to: {},
};

function signOut() {
  authStore.signOut();
}

const linkDown = ref(null);
downloadFile().then((url) => {
  linkDown.value = url;
});
</script>

<style lang="scss" scoped></style>
