<script setup>
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import CardBox from "@/components/admins/CardBox.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import { mdiClose } from "@mdi/js";
import { computed, defineEmits, defineProps, ref } from "vue";
import VueBasicAlert from "vue-basic-alert";
// store
import { useVehicleInfoStore } from "@/stores/vehicle.store";
// firebase
import { removeVehicleImg } from "@/firebase/ultils";
// constant
const props = defineProps({
  vehicleInfo: {
    type: Object,
    required: true,
  },
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
});
const emit = defineEmits([
  "update:modelValue",
  "cancel",
  "confirm",
  "startLoading",
  "endLoading",
  "showError",
]);
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
};
// use store
const vehicleStore = useVehicleInfoStore();

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});
const isShowReason = ref(false);
const rejectReason = ref(null);
const notificationStatusCreate = ref(null);
// call API
async function onRejectVehicle() {
  isShowReason.value = true;
  if (rejectReason.value === null) {
    notificationStatusCreate.value.showAlert(
      "error",
      "Lý do",
      "Không bỏ trống lý do"
    );
  } else {
    emit("startLoading");
    let { err } = await vehicleStore.handleRejectVehicle(
      props.vehicleInfo,
      rejectReason.value
    );
    emit("endLoading");
    if (err) {
      // notificationStatusCreate.value.showAlert("error", "Lỗi !", message);
      emit("endLoading");
    } else {
      let uid = props.vehicleInfo.uid;
      let numberPlate = props.vehicleInfo.numberPlate;
      await removeVehicleImg(uid, numberPlate);
    }
    cancel();
  }
}
</script>

<template>
  <VueBasicAlert
    :duration="1000"
    :closeIn="5000"
    ref="notificationStatusCreate"
  />
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

      <div class="h-full">
        <form class="flex flex-col justify-start space-y-6">
          <div class="reason">
            <textarea
              class="w-full h-52"
              v-model="rejectReason"
              placeholder="1. Biển số không hợp lê.
2. Tên xe không phù hợp"
            ></textarea>
          </div>
        </form>
      </div>
      <template #footer>
        <BaseButtons class="flex justify-end">
          <BaseButton
            label="Xác nhận lý do"
            color="warning"
            @click="onRejectVehicle"
          />
          <BaseButton
            v-if="hasCancel"
            label="Huỷ"
            :color="button"
            outline
            @click="cancel"
          />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss">
.error {
  @apply border-b-red-500;
  input {
    @apply text-red-500;
  }
}
.text-error {
  @apply text-left text-fz-16 my-2 text-red-500;
}
</style>
