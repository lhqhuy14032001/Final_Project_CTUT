<template>
  <div class="voucher-item mt-5">
    <vueper-slides
      :bullets="false"
      slideImageInside
      slide-multiple
      :visible-slides="1"
      :fixed-height="true"
    >
      <template #arrow-left> &larr; </template>

      <template #arrow-right> &rarr;</template>
      <vueper-slide
        v-for="voucher in voucherList"
        :key="voucher.id"
        :image="voucher.img"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

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
</script>

<style lang="scss" scoped>
.vueperslides--fixed-height {
  @apply h-56;
}
</style>
