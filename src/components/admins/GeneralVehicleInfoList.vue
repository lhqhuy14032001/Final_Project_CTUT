<template>
  <div class="vehicle-request">
    <table>
      <thead>
        <th>Tên xe</th>
        <th>Biển số</th>
        <th>Năm sản xuất</th>
        <th>Tỉnh/thành</th>
      </thead>
      <tbody>
        <tr v-for="vehicle in props.vehicles" :key="vehicle.car_id">
          <td>{{ vehicle.name }}</td>
          <td>{{ vehicle.numberPlate }}</td>
          <td>{{ vehicle.year_manufacture }}</td>
          <td>{{ vehicle.prov }}</td>
          <td class="flex justify-center">
            <router-link
              :to="{
                name: 'detailInforReqVehicle',
                params: { vehicle_id: vehicle.car_id },
              }"
            >
              <BaseButton :icon="mdiEye" color="info"></BaseButton>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex gap-5 justify-center my-5">
      <BaseButton
        :disabled="isDisble"
        @click="onPrev"
        label="Trước"
        color="info"
      ></BaseButton>
      <BaseButton @click="onNext" label="Tiếp" color="info"></BaseButton>
    </div>
  </div>
</template>

<script setup>
import { mdiEye } from "@mdi/js";
import { defineProps } from "vue";
import BaseButton from "./BaseButton.vue";
const props = defineProps({
  vehicles: {
    typed: Array,
    required: true,
    default() {
      return [];
    },
  },
});

// let currentPage = ref(1);
// let isDisble = ref(false);
// let vehicleRender = ref([]);
// let from = computed(() => {
//   return (currentPage.value - 1) * 2;
// });
// vehicleRender.value = props.vehicles.slice(from, currentPage.value * 2);
// console.log(vehicleRender.value);
// function onPrev() {
//   if (currentPage.value <= 1) {
//     isDisble.value = true;
//   } else {
//     currentPage.value = currentPage.value - 1;
//     vehicleRender.value = props.vehicles.slice(from, 2);
//     console.log(vehicleRender.value);
//   }
//   console.log(currentPage.value);
// }
// function onNext() {
//   currentPage.value = currentPage.value + 1;
//   vehicleRender.value = props.vehicles.slice(from, 2);
//   console.log("::from", from.value, currentPage.value);
//   console.log(props.vehicles.slice(from, 2));
// }
</script>

<style lang="scss" scoped>
table tbody tr:last-child {
  @apply text-center;
}
</style>
