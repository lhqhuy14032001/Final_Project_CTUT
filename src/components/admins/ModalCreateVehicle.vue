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
            <label for="car-name" class="mr-auto font-semibold">Tên xe</label>
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="email"
                id="car-name"
              />
            </div>
          </div>

          <div class="row grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Hãng xe
              </label>
              <VueMultiselect
                class="mt-2"
                v-model="selected"
                :options="manufactureYearList"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn hãng xe"
                label="label"
                track-by="value"
              ></VueMultiselect>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Loại xe
              </label>
              <VueMultiselect
                class="mt-2"
                v-model="selected"
                :options="manufactureYearList"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn loại xe"
                label="label"
                track-by="value"
              ></VueMultiselect>
            </div>
          </div>
          <div class="row grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Năm sản xuất
              </label>
              <VueMultiselect
                class="mt-2"
                v-model="selected"
                :options="manufactureYearList"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn năm sản xuất"
                label="label"
                track-by="value"
              ></VueMultiselect>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold"
                >Mức tiêu hao nhiên liệu</label
              >
              <div class="mt-2">
                <input
                  class="block w-full"
                  v-model="fuel"
                  type="range"
                  min="0"
                  max="30"
                  step="5"
                />
                <div class="mt-2">Dưới {{ fuel }}/100km</div>
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
<script setup>
import { computed, defineProps, defineEmits, ref } from "vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import VueBasicAlert from "vue-basic-alert";
import VueMultiselect from "vue-multiselect";

const fuel = ref(0);
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
    default: "Xác nhận",
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

// manufacture year
const selected = ref("");
const minYear = 2000;
const currentYear = new Date().getFullYear();
const manufactureYearList = [];
for (let index = 0; index < currentYear - minYear; index++) {
  manufactureYearList.push({
    value: minYear + index,
    label: (minYear + index).toString(),
  });
}
manufactureYearList.push({
  value: currentYear,
  label: currentYear.toString(),
});
// console.log(selected.value);
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="css" scoped>
input[type="range"] {
  accent-color: #5fcf86;
}
</style>
