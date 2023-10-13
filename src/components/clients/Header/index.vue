<template>
  <Transition name="slide-fade" class="lg:hidden z-50">
    <MenuMobile v-if="isShowMenu"></MenuMobile>
  </Transition>
  <div class="container mx-auto xl:mx-0 xl:my-5">
    <nav class="z-0 flex justify-between items-center p-0 h-14">
      <div class="w-12 left-nav">
        <router-link :to="{ name: 'home', params: {} }" class="flex items-end"
          ><img
            class="w-full mb-1"
            src="../../../assets/logo.png"
            alt="logo MiAUTO-logo"
          />
          <p class="text-black font-bold ml-1 text-2xl">MiAUTO</p>
        </router-link>
      </div>
      <div class="right-nav p-2">
        <Bars3Icon
          @click="toggleMenu"
          class="h-6 w-6 text-black lg:hidden"
        ></Bars3Icon>
        <div class="pc-nav hidden lg:flex">
          <div class="first-right-nav gap-3">
            <router-link class="pc-nav-item" to="/test">Về MiAUTO</router-link>
            <router-link class="pc-nav-item" to="/test"
              >Trở thành chủ xe</router-link
            >
          </div>
          <div class="line border-l-2 border-gray-300"></div>
          <div class="second-right-nav">
            <a class="pc-nav-item btn-signup" @click="onToggleModalSignUp"
              >Đăng ký</a
            >
            <a class="pc-nav-item btn-singin">Đăng nhập</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import MenuMobile from "@/components/clients/MenuMobile";
import { useState } from "@/stores/state.store";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { computed, defineEmits } from "vue";

const emits = defineEmits(["togglePcModalSignUp"]);
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
function onToggleModalSignUp() {
  emits("togglePcModalSignUp");
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>
