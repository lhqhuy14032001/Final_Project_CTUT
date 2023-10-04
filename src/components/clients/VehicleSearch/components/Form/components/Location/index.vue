<template>
  <div class="section-location min-h-full">
    <div class="min-h-full">
      <ModalLocation
        v-model="isShowModal"
        title="Địa điểm"
        button="bg-primary"
        buttonLabel="Tìm xe"
        :recentlyLocation="recentlyLocation.reverse()"
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
      <p>{{ currentLocation }}</p>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/admins/BaseIcon.vue";
import { mdiMapMarkerOutline } from "@mdi/js";
import { ref } from "vue";
import ModalLocation from "../ModalLocation";

const isShowModal = ref(false);
const recentlyLocation = [
  { id: 1, value: "Hồ Chí Minh" },
  { id: 2, value: "Long Xuyên" },
  { id: 3, value: "Châu Đốc" },
];
const currentLocation = ref(recentlyLocation[0].value);
const onSaveLocationRecently = (location) => {
  recentlyLocation.find(({ id }) => {
    id == location.id;
  });
  currentLocation.value = location.value;
  recentlyLocation.unshift(location);
};
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
