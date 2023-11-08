<script setup>
import { computed, defineProps, defineEmits, ref } from "vue";
import { mdiClose } from "@mdi/js";
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import CardBox from "@/components/admins/CardBox.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import VueBasicAlert from "vue-basic-alert";

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
  hasButtonConfirm: Boolean,
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  alertTitle: {
    type: [String, Number],
    default: null,
  },
  alertContent: {
    type: [String, Number],
    default: null,
  },
  alertType: {
    type: String,
  },
  alertDuration: {
    type: Number,
    default: 2000,
  },
  alertCloseIn: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "cancel",
  "confirm",
  "deleteUser",
]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
};

const notification = ref(null);
const confirm = () => {
  emit("deleteUser");
  cancel();
};

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});
</script>

<template>
  <VueBasicAlert
    :duration="alertDuration"
    :close-in="alertCloseIn"
    ref="notification"
  ></VueBasicAlert>
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

      <div class="space-y-3">
        <slot />
      </div>

      <template #footer>
        <BaseButtons class="flex justify-end">
          <BaseButton
            v-if="hasButtonConfirm"
            :label="buttonLabel"
            :color="button"
            @click="confirm"
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
