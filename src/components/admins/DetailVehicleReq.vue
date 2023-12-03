<template>
  <SectionMain>
    <VueBasicAlert
      :duration="1000"
      :closeIn="5000"
      ref="notificationStatusCreate"
    />
    <div v-if="isLoading"><Loading></Loading></div>
    <div v-else class="min-h-screen">
      <ModalRejectVehicle
        :vehicle-info="vehicle[0]"
        title="Lý do từ chối"
        has-cancel
        v-model="isShowModalReject"
        @startLoading="() => (isLoading = true)"
        @endLoading="() => (isLoading = false)"
        @showError="showError"
      ></ModalRejectVehicle>
      <SectionTitle
        first
        title="Duyệt thông tin"
        main
        :icon="mdiCheckBold"
      ></SectionTitle>
      <div>
        <h2 class="text-left text-xl font-bold my-3">Hình ảnh</h2>
        <div class="img-vehicle flex items-center justify-around">
          <div
            class="img-item w-60 h-60"
            v-for="(img, index) in imgsR[0]?.imgs"
            :key="index"
          >
            {{ imgsR.imgs }}
            <img
              class="h-full w-full object-cover"
              :src="img"
              :alt="img"
              @click="getIndex(index)"
            />
          </div>
        </div>
      </div>
      <div class="vehicle-info my-5">
        <h2 class="text-left text-xl font-bold my-3">Thông tin xe</h2>
        <table>
          <tbody>
            <tr>
              <td class="font-bold">Hãng xe</td>
              <td>{{ vehicle[0]?.brand }}</td>
              <td class="font-bold">Tên xe</td>
              <td>{{ vehicle[0]?.name }}</td>
              <td class="font-bold">Năm sản xuất</td>
              <td>{{ vehicle[0]?.year_manufacture }}</td>
            </tr>
            <tr>
              <td class="font-bold">Loại xe</td>
              <td>{{ vehicle[0]?.carType }}</td>
              <td class="font-bold">Hộp số</td>
              <td>{{ vehicle[0]?.gearbox }}</td>
              <td class="font-bold">Loại nhiên liệu</td>
              <td>{{ vehicle[0]?.fuel }}</td>
            </tr>
            <tr>
              <td class="font-bold">Biển số xe</td>
              <td>{{ vehicle[0]?.numberPlate }}</td>
              <td class="font-bold">Đặt cọc</td>
              <td>{{ vehicle[0]?.deposit_state }}</td>
              <td class="font-bold">Bảo hiểm vật chất</td>
              <td>
                {{
                  vehicle[0]?.physical_damage_coverage_state
                    ? vehicle[0]?.physical_damage_coverage_brand
                    : "Không có"
                }}
              </td>
            </tr>
            <tr>
              <td class="font-bold">Địa chỉ</td>
              <td>
                {{ vehicle[0]?.addressDetail }}
              </td>
              <td class="font-bold">Quận/huyện</td>
              <td>
                {{ vehicle[0]?.district }}
              </td>
              <td class="font-bold">Tỉnh thành</td>
              <td>{{ vehicle[0]?.prov }}</td>
            </tr>
          </tbody>
        </table>
        <div class="features my-5 vehicle-options">
          <h2 class="text-left text-xl font-bold my-3">Tiện ích</h2>
          <div class="option-list">
            <ul>
              <li
                v-for="(feature, index) in vehicle[0]?.features.features"
                :key="index"
              >
                <img class="w-8" loading="lazy" :src="feature.img" alt="" />
                {{ feature.label }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <BaseButton
            class="w-full rounded-lg font-semibold"
            color="warning"
            label="Từ chối"
            @click="onRejectVehicle"
          ></BaseButton>
        </div>
        <div class="col-span-6">
          <BaseButton
            class="w-full rounded-lg font-semibold"
            color="info"
            label="Duyệt"
            @click="onConfirmVehicle"
          ></BaseButton>
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgs"
        @hide="onHide"
        :index="indexRef"
      ></vue-easy-lightbox>
    </div>
  </SectionMain>
</template>

<script setup>
// components
import SectionMain from "./SectionMain.vue";
import SectionTitle from "./SectionTitle.vue";
import BaseButton from "./BaseButton.vue";
import ModalRejectVehicle from "./ModalRejectVehicle.vue";
import VueBasicAlert from "vue-basic-alert";
import Loading from "@/components/Loading";

import { mdiCheckBold } from "@mdi/js";
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
// firebase
import { getImageListByNumberPlate } from "@/firebase/uploadImagesVehicle";
// store
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { storeToRefs } from "pinia";
// route
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

// loading
const isLoading = ref(false);

// route
const route = useRoute();
const router = useRouter();
// store
const vehicleStore = useVehicleInfoStore();
const { vehicleWaitToConfirm } = storeToRefs(vehicleStore);
const vehicle = ref([]);
const imgs = ref([]);
const imgsR = ref([]);
// get vehicle
vehicle.value = vehicleWaitToConfirm.value.filter((element) => {
  return element.car_id == route.params.vehicle_id;
});
if (vehicle.value.length <= 0) {
  vehicle.value = vehicleWaitToConfirm.value.filter((element) => {
    return element.car_id == route.params.vehicle_id;
  });
  router.push({ name: "car-manage", params: {} });
} else {
  onBeforeMount(async () => {
    imgs.value.push({
      numberPLate: vehicle.value[0].numberPlate,
      imgs: await getImageListByNumberPlate(
        vehicle.value[0].uid,
        vehicle.value[0].numberPlate
      ),
    });
    imgsR.value = imgs.value.filter((element) => {
      if (element.numberPLate == vehicle.value[0].numberPlate)
        return element.imgs;
    });
  });
}
const visibleRef = ref(false);
const indexRef = ref(0);
const onShow = () => {
  visibleRef.value = true;
};
const getIndex = (index) => {
  indexRef.value = index;
  onShow();
};
const onHide = () => (visibleRef.value = false);

// call API confirm
const notificationStatusCreate = ref(null);

const isShowModalReject = ref(false);
async function onConfirmVehicle() {
  isLoading.value = true;
  let { err, message } = await vehicleStore.handleAcceptVehicle(
    vehicle.value[0]
  );
  isLoading.value = false;
  if (err) {
    notificationStatusCreate.value.showAlert("error", "Lỗi !!!", message);
  }
}
function onRejectVehicle() {
  isShowModalReject.value = true;
}
// error from modal reject vehicle
function showError() {
  notificationStatusCreate.value.showAlert(
    "error",
    "Lỗi !!!",
    "Có lỗi xảy ra vui lòng kiểm tra lại!"
  );
}
</script>

<style lang="scss" scoped>
.vehicle-options {
  @apply my-8 py-3 border-y;
  .option-list {
    @apply my-5;
    ul {
      @apply flex flex-wrap gap-4;
      li {
        @apply flex items-center gap-4;
        width: calc(25% - 15px);
      }
    }
  }
}
</style>
