<template>
  <carousel v-bind="settings" class="sm:hidden">
    <slide v-for="item in props.vehicleList.slice(0, 8)" :key="item.car_id">
      <VehicleCard :vehicle="item"></VehicleCard>
    </slide>
    <template #addons>
      <Navigation />
    </template>
  </carousel>
  <div
    class="hidden sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4"
  >
    <VehicleCard
      v-for="item in props.vehicleList.slice(0, 8)"
      :key="item.car_id"
      :vehicle="item"
    >
    </VehicleCard>
  </div>
  <router-link :to="{ name: 'vehicleList', params: {} }">
    <p
      class="text-center my-5 text-lg text-gray-400 font-medium hover:text-primary hover:cursor-pointer"
    >
      Xem thêm nhiều xe hơn >>>
    </p>
  </router-link>
</template>

<script setup>
// components
import VehicleCard from "@/components/clients/VehicleCard";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { defineProps, ref } from "vue";

const settings = ref({ itemsToShow: 1, autoplay: 3000 });
const props = defineProps({
  vehicleList: { type: Array, required: true },
});
</script>

<style lang="scss" scoped></style>
