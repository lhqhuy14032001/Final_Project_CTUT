<template>
  <VehicleList :filterList="filterList"></VehicleList>
</template>

<script setup>
import VehicleList from "./components/FilterList";
import { filterList } from "@/ultils/constants";
</script>

<style lang="scss" scoped></style>
