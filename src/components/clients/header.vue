<template>
  <Transition name="slide-fade" class="lg:hidden z-50">
    <MenuMobile v-if="isShowMenu"></MenuMobile>
  </Transition>
  <div class="container mx-auto">
    <nav class="z-0 flex justify-between items-center p-0 h-14">
      <!-- :to="{ name: 'home', params: {} } -->
      <div class="w-12 left-nav">
        <router-link to="/"
          ><img
            class="w-full"
            src="../../assets/logo.png"
            alt="logo MiAUTO-logo"
        /></router-link>
      </div>
      <div class="right-nav p-2 lg:hidden">
        <Bars3Icon @click="toggleMenu" class="h-6 w-6 text-black"></Bars3Icon>
      </div>
    </nav>
  </div>
</template>
<script setup>
import MenuMobile from "@/components/clients/MenuMobile";
import { useState } from "@/stores/state.store";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const stateStore = useState();
const toggleMenu = () => {
  try {
    stateStore.onToggleMenuMobile();
  } catch (error) {
    console.error("Faile to toggle menu", error);
  }
};
let isShowMenu = computed(() => stateStore.isShowMobileMenu);

stateStore.$subscribe((mutation, { isShowMobileMenu }) => {
  isShowMenu.value = isShowMobileMenu;
});
</script>
<style lang="css">
.slide-fade-leave-to,
.slide-fade-enter-from {
  transform: translateX(-100%);
}
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: transform 0.5s ease-in;
}
.slide-fade-enter-to {
  transform: translateX(0);
}
</style>
