<template>
  <div class="vehicle-list">
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <ModalSignIn v-model="isShowModalSignIn" has-cancel></ModalSignIn>
    <Header></Header>
    <!-- <VehicleFilter></VehicleFilter> -->
    <div class="location-search my-5">
      <div class="flex gap-5 items-center">
        <h2 class="text-2xl font-bold text-left my-5">Tìm xe</h2>
        <BaseButton
          @click="onResetFilter"
          class="w-8 h-8"
          :icon="mdiReload"
        ></BaseButton>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label for="car-name" class="mr-auto font-semibold">
            Tỉnh/Thành Phố
          </label>
          <Multiselect
            class="mt-2"
            v-model="selectedProvince"
            :options="provSearch"
            selectLabel="Nhấn Enter để chọn"
            :close-on-select="true"
            :clear-on-select="false"
            placeholder="Chọn tỉnh/thành phố"
            label="prov_name"
            track-by="prov_id"
            @select="getProvince"
          ></Multiselect>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col grow-5">
            <label for="car-name" class="mr-auto font-semibold">
              Quận/Huyện
            </label>
            <Multiselect
              v-if="prov"
              class="mt-2"
              v-model="selectedDistrict"
              :options="districtSearch"
              selectLabel="Nhấn Enter để chọn"
              :close-on-select="true"
              :clear-on-select="false"
              placeholder="Chọn quận/huyện"
              label="district_name"
              track-by="district_id"
              @select="getDistrict"
            ></Multiselect>
            <p class="mt-3" v-else>
              Chọn tỉnh/thành trước rồi sau đó chọn quận/huyện
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="vehicleFilter.length <= 0"
      class="text-lg text-gray-400 font-semibold"
    >
      Danh sách xe trống.
    </div>
    <div
      v-else
      class="vehicle-list my-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <VehicleCard
        v-for="vehicle in vehicleFilter"
        :key="vehicle.car_id"
        :vehicle="vehicle"
      ></VehicleCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { mdiReload } from "@mdi/js";
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
// import VehicleFilter from "@/components/clients/VehicleFilter";
import VehicleCard from "@/components/clients/VehicleCard";
import ModalSignUp from "@/components/clients/ModalSignUp";
import ModalSignIn from "@/components/clients/ModalSignIn";
import BaseButton from "@/components/admins/BaseButton.vue";
import Multiselect from "vue-multiselect";

// constant
import { vehicleStatus } from "@/ultils/constants";
// store
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";

// access to store
const stateStore = useState();
const { isShowModalSignUp, isShowModalSignIn } = storeToRefs(stateStore);
const vehicleStore = useVehicleInfoStore();
onBeforeMount(async () => {
  await vehicleStore.getProvincesSearch();
  await vehicleStore.getVehicleChecked(vehicleStatus.DD);
  vehicleFilter.value = vehicleChecked.value;
});
const { vehicleChecked, provSearch, districtSearch } =
  storeToRefs(vehicleStore);

const vehicleFilter = ref([]);

// province
const selectedProvince = ref(null);
const prov = ref(null);
const getProvince = async (province) => {
  prov.value = province;
  await vehicleStore.getDistrictsSearch(province.prov_id);
};

// district
const selectedDistrict = ref(null);
const getDistrict = (dist) => {
  vehicleFilter.value = vehicleChecked.value.filter((vehicle) => {
    return vehicle.district == dist.district_name;
  });
};

// reset filter
function onResetFilter() {
  selectedProvince.value = null;
  selectedDistrict.value = null;
  vehicleFilter.value = vehicleChecked.value;
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss" scoped></style>
