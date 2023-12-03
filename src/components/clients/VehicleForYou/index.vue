<template>
  <div class="mb-3">
    <BaseTitle title="Xe Dành Cho Bạn"></BaseTitle>
  </div>
  <VehicleList :vehicleList="props.vehicleForYou"></VehicleList>
</template>

<script setup>
import BaseTitle from "../BaseTitle.vue";
import VehicleList from "./components/VehicleList";
import { defineProps } from "vue";
const props = defineProps({ vehicleForYou: { type: Array, required: true } });
</script>

<style lang="scss" scoped></style>
