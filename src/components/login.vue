<template>
  <Transition @leave="onEnter" :css="false">
    <div
      class="pt-10 container w-full h-full bg-gray-100 fixed flex flex-col justify-between"
    >
      <div class="flex m-4 justify-end">
        <div class="rounded-full border border-gray-200">
          <XMarkIcon @click="closeLogin" class="p-2 w-8 h-8 text-black" />
        </div>
      </div>
      <div class="flex-grow">
        <div class="mt-10">
          <div class="mx-4 text-text-dark font-semibold">
            <ul class="overflow-hidden rounded-xl bg-white p-4">
              <li class="border-b py-3 px-4">Đăng nhập</li>
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
      </div>
    </div></Transition
  >
</template>
<script setup>
import { defineEmits } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import gsap from "gsap";
const emit = defineEmits(["closeLogin"]);
const closeLogin = () => {
  emit("closeLogin");
};
// const onBeforeEnter = (el) => {
//   gsap.set(el, {
//     xPercent: 0,
//   });
// };
const onEnter = (el) => {
  gsap.from(el, {
    xPercent: 0,
  });
};
</script>
