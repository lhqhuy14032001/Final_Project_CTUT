<template>
  <div class="detali-vehicle-wrapper">
    <ModalSignIn v-model="isShowModalSignIn" has-cancel></ModalSignIn>
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <Header></Header>{{}}
    <imagesVehicle
      :imagesList="imgList"
      :mainImg="imgList[0]"
      :subImages="[imgList[1], imgList[2], imgList[3]]"
    ></imagesVehicle>
    <detailVehicle :options="optionsList" :carinfo="carInfo[0]"></detailVehicle>
    <Footer></Footer>
  </div>
</template>

<script setup>
// components
import Footer from "@/components/clients/Footer";
import Header from "@/components/clients/Header";
import ModalSignIn from "@/components/clients/ModalSignIn";
import ModalSignUp from "@/components/clients/ModalSignUp";
import { ref, onBeforeMount } from "vue";
import detailVehicle from "./components/detailVehicle";
import imagesVehicle from "./components/imagesVehicle";
// firebase
import { getImageListByNumberPlate } from "@/firebase/uploadImagesVehicle";
// router
import { useRouter } from "vue-router";
// store
import { useState } from "@/stores/state.store";
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { storeToRefs } from "pinia";
// handle store
const stateStore = useState();
const { isShowModalSignIn, isShowModalSignUp } = storeToRefs(stateStore);
const vehicleStore = useVehicleInfoStore();
const { vehicleChecked } = storeToRefs(vehicleStore);
// handle router
const router = useRouter();
let carID = router.currentRoute.value.params.id;
const carInfo = ref([]);

// handle vehicle img
let imgList = ref([]);

// options list
let optionsList = [
  {
    id: 1,
    label: "Bản đồ",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/map-v2.png",
  },
  {
    id: 2,
    label: "Bluetooth",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth-v2.png",
  },
  {
    id: 3,
    label: "Camera 360",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/360_camera-v2.png",
  },
  {
    id: 4,
    label: "Camera cập lề",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/parking_camera-v2.png",
  },
  {
    id: 5,
    label: "Camera hành trình",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera-v2.png",
  },
  {
    id: 6,
    label: "Camera lùi",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera-v2.png",
  },
  {
    id: 7,
    label: "Cảm biến va chạm",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/impact_sensor-v2.png",
  },
  {
    id: 8,
    label: "Cảnh báo tốc độ",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up-v2.png",
  },
  {
    id: 9,
    label: "Định vị GPS",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps-v2.png",
  },
  {
    id: 10,
    label: "Khe cắm USB",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb-v2.png",
  },
  {
    id: 11,
    label: "Lốp dự phòng",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire-v2.png",
  },
  {
    id: 12,
    label: "Màn hình DVD",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd-v2.png",
  },
  {
    id: 13,
    label: "ETC",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc-v2.png",
  },
  {
    id: 14,
    label: "Túi khí an toàn",
    img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags-v2.png",
  },
];

onBeforeMount(async () => {
  if (vehicleChecked.value.length > 0) {
    carInfo.value = vehicleChecked.value.filter((vehicle) => {
      return vehicle.car_id == carID;
    });

    if (carInfo.value[0].length != 0) {
      imgList.value = await getImageListByNumberPlate(
        carInfo.value[0].uid,
        carInfo.value[0].numberPlate
      );
    }
  } else {
    router.push({ name: "home", params: {} });
  }
});
</script>

<style lang="scss" scoped></style>
