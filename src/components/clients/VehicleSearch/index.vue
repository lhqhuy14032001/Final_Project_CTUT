<template>
  <div class="wrap-form relative">
    <form-search @onSubmitForm="onOnSubmitForm"></form-search>
  </div>
</template>

<script setup>
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { storeToRefs } from "pinia";
import FormSearch from "./components/Form";

const vehicleStore = useVehicleInfoStore();
const { searchInfo } = storeToRefs(vehicleStore);
function onOnSubmitForm({ dateHire, location }) {
  searchInfo.value.startDate = dateHire.startDate;
  searchInfo.value.endDate = dateHire.endDate;
  searchInfo.value.location = location;
}
</script>

<style lang="scss" scoped></style>
