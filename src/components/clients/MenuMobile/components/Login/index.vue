<template>
  <div class="mt-10 responsive">
    <div class="mx-4 text-text-dark font-semibold">
      <ul class="overflow-hidden rounded-xl bg-white p-4">
        <li @click="onLogin" class="border-b py-3 px-4">Đăng nhập</li>
        <li class="py-3 px-4">Đăng ký</li>
      </ul>
    </div>
    <div class="verflow-hidden mx-4 mt-5 text-text-dark font-semibold">
      <ul class="rounded-xl bg-white p-4">
        <li class="border-b py-3 px-4">Về MiAUTO</li>
        <li class="py-3 px-4">Trở thành chủ xe</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
// import { XMarkIcon } from "@heroicons/vue/24/outline";
// import gsap from "gsap";
const emit = defineEmits(["onLogin"]);
const onLogin = () => {
  emit("onLogin");
};

// const emit = defineEmits(["closeMenu"]);
// const closeMenu = () => {
//   emit("closeMenu");
// };

// const onBeforeEnter = (el) => {
//   gsap.set(el, {
//     xPercent: 0,
//   });
// };
// const onEnter = (el) => {
//   gsap.from(el, {
//     xPercent: 0,
//   });
// };
</script>
<style lang="scss" scoped>
@import url(./responsive.scss);
</style>
