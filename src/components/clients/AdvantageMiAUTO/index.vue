<template>
  <div class="advantage-miauto">
    <BaseTitle
      title="Ưu điểm của MiAUTO"
      subTitle="Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên MiAuto"
    ></BaseTitle>
    <div class="advantage-list">
      <div class="advantage-list-mobile sm:hidden">
        <carousel v-bind="settings">
          <slide v-for="(card, index) in advantageMiAUTO" :key="index">
            <AdvantageBaseCard :advantageCard="card"> </AdvantageBaseCard>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="advantage-list-pc hidden sm:block">
        <div
          class="advantage-list-pc-item"
          v-for="(card, index) in advantageMiAUTO"
          :key="index"
        >
          <AdvantageBaseCard :advantageCard="card"> </AdvantageBaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseTitle from "../BaseTitle.vue";
import AdvantageBaseCard from "./AdvantageBaseCard";
import { advantageMiAUTO } from "@/ultils/constants";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ref } from "vue";
const settings = ref({ itemsToShow: 1, autoplay: 1000 });
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
