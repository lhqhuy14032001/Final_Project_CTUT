<template>
  <div class="voucher-item">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        class="w-full"
        v-for="voucher in voucherList"
        :key="voucher.id"
      >
        <div class="w-full h-36">
          <img class="rounded-xl" :src="voucher.img" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { defineProps } from "vue";
const props = defineProps({
  voucherList: {
    type: Array,
    required: true,
    default() {
      [];
    },
  },
});
const { voucherList } = props;
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss" scoped></style>
