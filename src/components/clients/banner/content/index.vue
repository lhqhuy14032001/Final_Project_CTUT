<template>
  <div class="wrapper p-4 responsive-content">
    <h2 class="title text-[28px] sm:text-[40px] text-center font-extrabold">
      MiAUTO - Cùng Bạn Đến Mọi Hành Trình
    </h2>
    <div class="border mx-auto w-[50%] sm:w-[30%] my-5"></div>
    <p class="sub-title font-medium text-fz-16">
      Trải nghiệm sự khác biệt từ
      <span class="text-primary"> hơn {{ totalVehicle }}</span>
      xe gia đình đời mới khắp Việt Nam
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  totalVehicle: {
    type: Number,
    required: true,
    default() {
      8000;
    },
  },
});
let totalVehicle = props.totalVehicle;
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
