<template>
  <Transition @beforeEnter="onBeforeEnter" @enter="onEnter" :css="false">
    <login v-if="isShowLogin" @closeLogin="toggleMenu" />
  </Transition>
  <div class="container">
    <nav class="z-0 flex justify-between items-center mx-4 p-0 h-14">
      <div class="w-12 left-nav">
        <router-link :to="{ name: 'home', params: {} }"
          ><img
            class="w-full"
            src="../../assets/logo.png"
            alt="logo MiAUTO-logo"
        /></router-link>
      </div>
      <div @click="toggleMenu" class="right-nav p-2">
        <Bars3Icon class="h-6 w-6 text-black"></Bars3Icon>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import gsap from "gsap";
import Login from "@/components/login.vue";
import { ref } from "vue";

const isShowLogin = ref(false);
const toggleMenu = () => {
  isShowLogin.value = !isShowLogin.value;
};
const onBeforeEnter = (el) => {
  gsap.set(el, {
    xPercent: -100,
  });
};
const onEnter = (el) => {
  if (!isShowLogin.value) {
    gsap.to(el, {
      xPercent: -100,
    });
  } else {
    gsap.to(el, {
      xPercent: 0,
    });
  }
};
// const onLeave = (el) => {
//   console.log("leave", isShowLogin.value);
//   watch(isShowLogin, (newValue) => {
//     console.log(newValue);
//     gsap.from(el, {
//       xPercent: -100,
//     });
//   });
// };
</script>
<style lang="css" scoped></style>
