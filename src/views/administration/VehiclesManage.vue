<template>
  <SectionMain>
    <SectionTitleLineWithButton
      :icon="mdiCar"
      title="Phê duyệt"
      main
      @toggleModal="onCreateVehicle"
    >
    </SectionTitleLineWithButton>
    <div>
      <div class="text-xl font-bold" v-if="vehicleWaitToConfirm.length <= 0">
        Không có xe yêu cầu duyệt.
      </div>
      <div v-else>
        <GeneralVehicleInfoList :vehicles="vehicleWaitToConfirm" />
      </div>
    </div>
  </SectionMain>
</template>

<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/admins/SectionTitleLineWithButton.vue";
import GeneralVehicleInfoList from "@/components/admins/GeneralVehicleInfoList.vue";
import { vehicleStatus } from "@/ultils/constants";
// store
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { storeToRefs } from "pinia";
const vehicleStore = useVehicleInfoStore();

// call API
vehicleStore.getVehicleWithStatus(vehicleStatus.CD);
const { vehicleWaitToConfirm } = storeToRefs(vehicleStore);
</script>

<style lang="scss" scoped></style>
