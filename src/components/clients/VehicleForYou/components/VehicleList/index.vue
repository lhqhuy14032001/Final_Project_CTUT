<template>
  <carousel v-bind="settings" class="sm:hidden">
    <slide v-for="index in 10" :key="index">
      <VehicleCard></VehicleCard>
    </slide>
    <template #addons>
      <Navigation />
    </template>
  </carousel>
  <div
    class="hidden sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
    <VehicleCard></VehicleCard>
  </div>
</template>

<script setup>
import VehicleCard from "@/components/clients/VehicleCard";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
const settings = ref({ itemsToShow: 1, autoplay: 3000 });
</script>

<style lang="scss" scoped></style>
