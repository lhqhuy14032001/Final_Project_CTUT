<template>
  <div class="section-location min-h-full">
    <div class="min-h-full">
      <ModalLocation
        v-model="isShowModal"
        title="Địa điểm"
        button="bg-primary"
        buttonLabel="Xong"
        :recentlyLocation="recentlyLocation.reverse()"
        :currentLocation="currentLocation"
        @onSaveLocationRecently="onSaveLocationRecently"
      ></ModalLocation>
    </div>
    <div class="section-title">
      <p class="location-icon mr-3">
        <BaseIcon :path="mdiMapMarkerOutline" :size="24"></BaseIcon>
      </p>
      <p>Địa điểm</p>
    </div>
    <div class="section-body relative" @click="isShowModal = !isShowModal">
      <p v-if="currentLocation">{{ currentLocation.label }}</p>
      <p v-else>Chọn địa điểm cần tìm xe</p>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon.vue";
import { mdiMapMarkerOutline } from "@mdi/js";
import { ref, watch, defineEmits } from "vue";
import ModalLocation from "../ModalLocation";

const emit = defineEmits(["submitLocation"]);
const isShowModal = ref(false);
const recentlyLocation = [
  { id: 1, label: "Hồ Chí Minh" },
  { id: 2, label: "Long Xuyên" },
  { id: 3, label: "Châu Đốc" },
];
const currentLocation = ref(null);

const onSaveLocationRecently = (location) => {
  if (!location) {
    emit("submitLocation", undefined);
  } else {
    const findLocation = recentlyLocation.find(({ label }) => {
      if (label == location.label) return true;
    });
    if (!findLocation) {
      recentlyLocation.unshift(location);
    } else {
      recentlyLocation.forEach((item, index) => {
        if (item.label == location.label) {
          recentlyLocation.splice(index, 1);
        }
      });
      recentlyLocation.unshift(location);
    }
    currentLocation.value = location;
    emit("submitLocation", currentLocation.value);
  }
};
watch(currentLocation, (newCurrentLocation) => {
  emit("submitLocation", newCurrentLocation);
});
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
