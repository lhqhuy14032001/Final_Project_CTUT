<template>
  <div class="wrapper flex text-center min-w-full">
    <div
      class="left-btn rounded-tl-2xl"
      :class="{ active: isActiveButton === 'left' }"
      @click="onToggle('left')"
    >
      <span><BaseIcon :path="mdiCar" :size="20"></BaseIcon></span>
      <span class="ml-1">Xe tự lái</span>
    </div>
    <div
      class="right-btn border-l-2 border-gray-200 rounded-tr-2xl"
      :class="{ active: isActiveButton === 'right' }"
      @click="onToggle('right')"
    >
      <span><BaseIcon :path="mdiAccountTieHat" :size="20"></BaseIcon></span>
      <span class="ml-1">Xe có tài xế</span>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon";
import { mdiCar, mdiAccountTieHat } from "@mdi/js";
import { ref } from "vue";

const isActiveButton = ref("left");

function onToggle(button) {
  isActiveButton.value = button;
}
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
