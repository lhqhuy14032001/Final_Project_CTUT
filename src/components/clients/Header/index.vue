<template>
  <Transition name="slide-fade" class="lg:hidden z-50">
    <MenuMobile v-if="isShowMenu"></MenuMobile>
  </Transition>
  <div class="container mx-auto xl:mx-0 xl:my-5 min-w-full">
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
        <div class="pc-nav hidden lg:flex lg:items-center">
          <div class="first-right-nav gap-3">
            <router-link
              class="pc-nav-item"
              :to="{ name: 'policy', params: {} }"
            >
              Về MiAUTO
            </router-link>
            <router-link class="pc-nav-item" to="/test"
              >Trở thành chủ xe</router-link
            >
          </div>
          <div class="line border-l-2 border-gray-300"></div>
          <div v-if="!isLoggedIn" class="second-right-nav">
            <a class="pc-nav-item btn-signup" @click="onToggleModalSignUp"
              >Đăng ký</a
            >
            <a class="pc-nav-item btn-singin" @click="onToggleModalSignIn"
              >Đăng nhập</a
            >
          </div>
          <div v-else class="flex items-center cursor-pointer">
            <a class="pc-nav-item">Chuyến đi</a>
            <router-link
              class="account flex items-center pc-nav-item"
              :to="{ name: 'accountInfo', params: {} }"
            >
              <div class="user-avt m-3">
                <img
                  :src="
                    userLoggedIn?.avatar ??
                    'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                  "
                  alt="user avatar"
                  class="w-6 rounded-lg"
                />
              </div>
              <div class="username">{{ userLoggedIn.fullname }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
// component
import MenuMobile from "@/components/clients/MenuMobile";
// pinia store
import { useState } from "@/stores/state.store";
import { useAuth } from "@/stores/auth.store";
// other
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { storeToRefs } from "pinia";

// init store
const stateStore = useState();
const authStore = useAuth();
const { isLoggedIn, userLoggedIn } = storeToRefs(authStore);

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
  stateStore.onToggleModalSignUp();
}

function onToggleModalSignIn() {
  stateStore.onToggleModalSignIn();
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>
