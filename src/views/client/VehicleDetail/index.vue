<template>
  <div class="detali-vehicle-wrapper">
    <ModalSignIn v-model="isShowModalSignIn" has-cancel></ModalSignIn>
    <ModalSignUp v-model="isShowModalSignUp" has-cancel></ModalSignUp>
    <Header></Header>
    <imagesVehicle
      :imagesList="imgList"
      :mainImg="imgList[0]"
      :subImages="[imgList[1], imgList[2], imgList[3]]"
    ></imagesVehicle>
    <detailVehicle :options="optionsList"></detailVehicle>
    <Footer></Footer>
  </div>
</template>

<script setup>
// components
import Header from "@/components/clients/Header";
import Footer from "@/components/clients/Footer";
import ModalSignIn from "@/components/clients/ModalSignIn";
import ModalSignUp from "@/components/clients/ModalSignUp";
import imagesVehicle from "./components/imagesVehicle";
import detailVehicle from "./components/detailVehicle";
// router
import { useRouter } from "vue-router";
// store
import { useState } from "@/stores/state.store";
import { storeToRefs } from "pinia";
// handle store
const stateStore = useState();
const { isShowModalSignIn, isShowModalSignUp } = storeToRefs(stateStore);

// handle router
const router = useRouter();
let params = router.currentRoute.value.params;
console.log(params);

// handle vehicle img
let imgList = [
  "https://www.toyota.com.vn/media/t2hpe25x/toyota-veloz-cross-1.jpeg?width=770&height=513&mode=max",
  "https://decoroto.com/wp-content/uploads/2023/02/toyota-veloz-4.jpg",
  "https://katavina.com/uploaded/tin/1/Toyota-Veloz-Cross-2023/9-Toyota-Veloz-Cross-2023.jpg",
  "https://toyotatancang.net/wp-content/uploads/2022/03/s3wXRRER6iKb43mgTkoUvJCmkUGTyDRkoZeKHnSHD6Jq73upWKdkBafcwt23xh1FcHWuTuYcbIfQglOIONR5t2cTv-ZFmT7wUrkXjLFtxlrDhzegrYKxfr4Lkd722_SoOwqR0d0D.jpg",
];

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

let carInfor = {
  
}
</script>

<style lang="scss" scoped></style>
