<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle :title="title">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>
      <div class="search-input flex border-2 border-gray-300 rounded-lg p-2">
        <div class="icon flex items-center">
          <BaseIcon :path="mdiMapMarkerOutline" :size="26"></BaseIcon>
        </div>
        <div class="search-value w-full rounded-lg">
          <input
            v-model="searchValue"
            type="text"
            class="w-full text-fz-16 font-semibold placeholder-gray-300 border-none focus:ring-0 rounded-lg"
            placeholder="Nhập vị trí của bạn"
          />
        </div>
        <div
          class="clear-search flex items-center py-2 pl-2"
          @click="onClearSearchValue"
        >
          <BaseIcon :path="mdiClose"></BaseIcon>
        </div>
      </div>
      <div
        class="recent-search font-semibold text-left pt-2 mt-5 border-t-2 max-h-40 overflow-scroll"
      >
        <p class="text-gray-400 text-sm mb-3">Tìm kiếm gần đây</p>
        <div class="flex" v-for="item in recentlyLocation" :key="item.id">
          <div class="mr-1">
            <BaseIcon :path="mdiMapMarkerOutline" size="20"></BaseIcon>
          </div>
          <p @click="onGetLocationFromRecent(item)">{{ item.value }}</p>
        </div>
      </div>
      <div class="mt-2">
        <BaseButton
          class="min-w-full"
          :label="buttonLabel"
          :color="button"
          @click="onSaveLocationRecently"
        />
      </div>
    </CardBox>
  </OverlayLayer>
</template>
<script setup>
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseIcon from "@/components/admins/BaseIcon.vue";
import CardBox from "@/components/admins/CardBox.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import { mdiClose, mdiMapMarkerOutline } from "@mdi/js";
import { computed, defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    default: "info",
  },
  buttonLabel: {
    type: String,
    default: "Done",
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  recentlyLocation: {
    required: true,
    type: Array,
    default() {
      [];
    },
  },
});

const emit = defineEmits([
  "update:modelValue",
  "cancel",
  "confirm",
  "onSaveLocationRecently",
]);

const searchValue = ref(null);
const { recentlyLocation } = props;

const onSaveLocationRecently = () => {
  if (!searchValue.value) {
    confirmCancel("cancel");
    return;
  }
  emit("onSaveLocationRecently", {
    id: recentlyLocation.length + 1,
    value: searchValue.value,
  });
  onClearSearchValue();
  confirmCancel("cancel");
};

const onGetLocationFromRecent = (location) => {
  emit("onSaveLocationRecently", {
    id: recentlyLocation.length + 1,
    value: location.value,
  });
  searchValue.value = location.value;
  confirmCancel("cancel");
};

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
};

const cancel = () => confirmCancel("cancel");
const onClearSearchValue = () => {
  searchValue.value = "";
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});
</script>
