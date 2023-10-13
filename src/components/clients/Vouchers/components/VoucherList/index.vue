<template>
  <div class="voucher-item mt-5">
    <carousel v-bind="settings">
      <slide v-for="item in voucherList" :key="item.id">
        <div class="banner-img">
          <img class="image w-full" :src="item.img" alt="voucher img" />
        </div>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { bannerItem } from "@/ultils/screenUtils";

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
const settings = ref({
  itemsToShow: bannerItem,
  autoplay: 2000,
});
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
