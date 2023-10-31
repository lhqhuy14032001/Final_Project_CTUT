<template>
  <VueBasicAlert :duration="1000" :closeIn="5000" ref="notificationStatus" />
  <form class="rounded-2xl w-[90%] mx-auto shadow-lg bg-white">
    <div class="search-option">
      <header-form></header-form>
    </div>
    <div class="section-body p-4">
      <location-form @submitLocation="getLocation"> </location-form>
      <HireDate @submitDate="getDate"></HireDate>
      <div
        class="btn-search w-full p-4 mt-8 bg-primary rounded-md font-semibold text-white"
        @click="onSubmitForm"
      >
        Tìm xe
      </div>
    </div>
  </form>
</template>

<script setup>
import HeaderForm from "./components/Header";
import HireDate from "@/components/clients/HireDate";
import LocationForm from "@/components/clients//Location";
import VueBasicAlert from "vue-basic-alert";
import { ref, defineEmits } from "vue";
const emits = defineEmits(["onSubmitForm"]);
const notificationStatus = ref(null);
const dateValid = ref(null);
const locationValid = ref(null);

function getDate(dateHire) {
  dateValid.value = dateHire;
}

function getLocation(location) {
  locationValid.value = location;
}
function isValidValue() {
  try {
    let isValid = false;
    if (!locationValid.value) {
      notificationStatus.value.showAlert(
        "error",
        "Lỗi !!!",
        "Vui lòng chọn địa điểm tìm xe."
      );
    } else if (!dateValid.value) {
      notificationStatus.value.showAlert(
        "error",
        "Lỗi !!!",
        "Vui lòng chọn ngày nhận và trả xe."
      );
    } else {
      isValid = true;
    }
    return isValid;
  } catch (error) {
    console.error("Some thing went wrong", error);
  }
}
function onSubmitForm() {
  try {
    let isValid = isValidValue(dateValid.value, locationValid.value);
    if (isValid) {
      emits("onSubmitForm", {
        dateHire: dateValid.value,
        location: locationValid.value,
      });
    }
  } catch (error) {
    notificationStatus.value.showAlert(
      "error",
      "Lỗi !!!",
      "Có lỗi xảy ra vui lòng thử lại."
    );
    console.error("Some thing went wrong", error);
  }
}
</script>

<style lang="scss" scoped></style>
