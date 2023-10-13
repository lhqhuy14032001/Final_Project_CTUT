<template>
  <BaseTitle title="Địa điểm nổi bật"></BaseTitle>
  <LocationList :locationFamousList="locationFamous"></LocationList>
</template>

<script setup>
import BaseTitle from "../BaseTitle.vue";
import LocationList from "./Components/LocationList";
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { storeToRefs } from "pinia";
const vehicleInfo = useVehicleInfoStore();
const { locationFamous } = storeToRefs(vehicleInfo);
</script>

<style lang="scss" scoped></style>
