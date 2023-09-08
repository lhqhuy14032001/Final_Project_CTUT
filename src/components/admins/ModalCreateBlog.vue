<script setup>
import { computed, defineProps, defineEmits, ref } from "vue";
import { mdiClose, mdiEye, mdiEyeOff } from "@mdi/js";
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import CardBox from "@/components/admins/CardBox.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import BaseIcon from "./BaseIcon.vue";
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
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
};

const notificationStatusCreate = ref(null);
const confirm = () => {
  // alert("Create User is successfull");
  notificationStatusCreate.value.showAlert(
    "success",
    "Tạo tài khoản",
    "Tạo tài khoản thành công"
  );
  confirmCancel("cancel");
};

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});

const isShowPassword = ref(false);
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
          <div class="row flex flex-col">
            <label for="email" class="mr-auto font-semibold">Email</label>
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="password" class="mr-auto mb-2 font-semibold"
              >Password</label
            >
            <div class="block border-b-2 border-gray-300">
              <input
                class="w-[90%] border-none focus:ring-0 text-fz-16 pl-0"
                :type="isShowPassword ? 'password' : 'text'"
                id="password"
              />
              <BaseIcon
                @click="isShowPassword = !isShowPassword"
                :path="isShowPassword ? mdiEyeOff : mdiEye"
              ></BaseIcon>
            </div>
          </div>
          <div class="row flex xl:justify-between">
            <div class="mr-2 w-full">
              <label for="lastname" class="block text-left font-semibold"
                >Họ</label
              >
              <div class="border-b-2">
                <input
                  class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                  type="text"
                  id="lastname"
                />
              </div>
            </div>
            <div class="w-full">
              <label for="firstname" class="block text-left font-semibold"
                >Tên</label
              >
              <div class="border-b-2">
                <input
                  class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                  type="text"
                  id="firstname"
                />
              </div>
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="phonenumber" class="mr-auto font-semibold"
              >Số điện thoại</label
            >
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="text"
                id="phonenumber"
              />
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="address" class="mr-auto font-semibold"> Địa chỉ </label>
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="text"
                id="address"
              />
            </div>
          </div>
        </form>
      </div>
      <template #footer>
        <BaseButtons class="flex justify-end">
          <BaseButton :label="buttonLabel" :color="button" @click="confirm" />
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
