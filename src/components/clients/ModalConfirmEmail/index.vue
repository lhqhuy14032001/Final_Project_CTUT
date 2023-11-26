<template>
  <VueBasicAlert
    :duration="1000"
    :closeIn="5000"
    ref="notificationStatusCreate"
  />
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="signup-wrapper shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle title="Cập nhật E-mail" class="my-5">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>

      <div class="h-fit">
        <form class="flex flex-col justify-start space-y-6">
          <div class="row flex flex-col">
            <label for="email" class="mr-auto mb-2 font-semibold">Email</label>
            <div
              class="flex items-center border-b-2 border-gray-300 p-0"
              :class="handleErrorClass(v$.email.$error)"
            >
              <input
                v-model="formData.email"
                class="w-full border-none focus:ring-0 text-fz-16 pl-0"
                id="email"
              />
            </div>
            <p v-if="v$.email.$error" class="text-error">
              <span v-for="error in v$.email.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </p>
          </div>
        </form>
      </div>
      <template #footer>
        <button
          @click="onSubmitForm"
          class="btn-signup min-w-full bg-primary text-white font-semibold rounded-lg py-4 px-6 disabled:bg-gray-400"
          :disabled="!isDisableButton"
        >
          Xác nhận
        </button>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
<script setup>
import BaseButton from "@/components/admins/BaseButton.vue";
import CardBox from "@/components/admins/CardBox.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import { mdiClose } from "@mdi/js";
import { useVuelidate } from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";
import { computed, defineEmits, defineProps, ref } from "vue";
import VueBasicAlert from "vue-basic-alert";
// store
import { useUser } from "@/stores/user.store";
const userStore = useUser();

const props = defineProps({
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

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});

const isDisableButton = ref(true);
const notificationStatusCreate = ref(null);

const formData = ref({
  email: "",
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Vui lòng không bỏ trống email.", required),
      email: helpers.withMessage("Vui lòng nhập email đúng định dạng.", email),
    },
  };
});
const v$ = useVuelidate(rules, formData);

function handleErrorClass(condition) {
  return condition ? "error" : "";
}
function onClearData() {
  formData.value.email = "";
}
async function onSubmitForm() {
  let isValidForm = await v$.value.$validate();
  if (isValidForm) {
    let res = await userStore.updateRole(formData.value.email);
    if (res.errMesssage) {
      notificationStatusCreate.value.showAlert(
        "error",
        "Cập nhật e-mail",
        "Cập nhật E-mail không thành công."
      );
    } else {
      notificationStatusCreate.value.showAlert(
        "success",
        "Cập nhật e-mail",
        "Cập nhật E-mail thành công."
      );
      onClearData();
      v$.value.$reset();
      confirmCancel("cancel");
    }
  }
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>
