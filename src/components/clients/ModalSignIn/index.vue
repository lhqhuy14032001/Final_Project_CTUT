<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="signup-wrapper shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <VueBasicAlert
        :duration="1000"
        :closeIn="5000"
        ref="notificationStatusCreate"
      />
      <CardBoxComponentTitle title="Đăng nhập" class="my-5">
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
            <label for="phonenumber" class="mr-auto font-semibold"
              >Số điện thoại</label
            >
            <div
              class="border-b-2"
              :class="handleErrorClass(v$.phonenumber.$error)"
            >
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="text"
                id="phonenumber"
                v-model="formData.phonenumber"
              />
            </div>
            <p v-if="v$.phonenumber.$error" class="text-error">
              <span v-for="error in v$.phonenumber.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </p>
          </div>
          <div class="row flex flex-col">
            <label for="password" class="mr-auto mb-2 font-semibold"
              >Mật khẩu</label
            >
            <div
              class="flex items-center border-b-2 border-gray-300 p-0"
              :class="handleErrorClass(v$.password.$error)"
            >
              <input
                v-model="formData.password"
                class="w-full border-none focus:ring-0 text-fz-16 pl-0"
                :type="isShowPassword ? 'password' : 'text'"
                id="password"
              />
              <BaseIcon
                @click="isShowPassword = !isShowPassword"
                :path="isShowPassword ? mdiEyeOff : mdiEye"
                class="mr-2"
              ></BaseIcon>
            </div>
            <p v-if="v$.password.$error" class="text-error">
              <span v-for="error in v$.password.$errors" :key="error.$uid">
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
          Đăng nhập
        </button>
        <div class="btn-signup-social-media flex gap-2 mt-4">
          <div class="btn-google">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0007 8.15571C15.0007 7.58016 14.953 7.16016 14.8499 6.72461H8.14357V9.32236H12.08C12.0007 9.96793 11.5721 10.9402 10.6197 11.5935L10.6064 11.6804L12.7268 13.2902L12.8737 13.3046C14.2229 12.0835 15.0007 10.2868 15.0007 8.15571Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M8.14312 15.0004C10.0717 15.0004 11.6907 14.3781 12.8733 13.3048L10.6193 11.5936C10.0161 12.0059 9.20659 12.2936 8.14312 12.2936C6.25425 12.2936 4.6511 11.0726 4.07962 9.38477L3.99585 9.39174L1.79101 11.064L1.76218 11.1425C2.93676 13.4292 5.34946 15.0004 8.14312 15.0004Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.08003 9.38399C3.92924 8.94844 3.84197 8.48174 3.84197 7.99954C3.84197 7.51729 3.92924 7.05064 4.0721 6.61509L4.06811 6.52233L1.83563 4.82324L1.76259 4.85729C1.27848 5.80619 1.0007 6.87177 1.0007 7.99954C1.0007 9.12732 1.27848 10.1928 1.76259 11.1417L4.08003 9.38399Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M8.14316 3.70665C9.48441 3.70665 10.3892 4.27442 10.905 4.7489L12.9209 2.82C11.6829 1.69223 10.0717 1 8.14316 1C5.34948 1 2.93677 2.5711 1.76218 4.85775L4.0717 6.61555C4.65111 4.92777 6.25428 3.70665 8.14316 3.70665Z"
                  fill="#EA4335"
                ></path>
              </svg>
            </div>
            <div>Google</div>
          </div>
        </div>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
<script setup>
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseIcon from "@/components/admins/BaseIcon.vue";
import CardBox from "@/components/admins/CardBox.vue";
import CardBoxComponentTitle from "@/components/admins/CardBoxComponentTitle.vue";
import OverlayLayer from "@/components/admins/OverlayLayer.vue";
import { useAuth } from "@/stores/auth.store";
import { regexPhoneNumber } from "@/ultils/constants";
import { mdiClose, mdiEye, mdiEyeOff } from "@mdi/js";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { computed, defineEmits, defineProps, ref } from "vue";
import VueBasicAlert from "vue-basic-alert";

const props = defineProps({
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);
const useAuthStore = useAuth();

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

const isShowPassword = ref(false);
const isDisableButton = ref(true);
const notificationStatusCreate = ref(null);

const mustBePhoneNumber = helpers.regex(regexPhoneNumber);

const formData = ref({
  phonenumber: "",
  password: "",
});

const rules = computed(() => {
  return {
    phonenumber: {
      required: helpers.withMessage(
        "Vui lòng không bỏ trống số điện thoại.",
        required
      ),
      mustBePhoneNumber: helpers.withMessage(
        "Số điện thoại không hợp lệ.",
        mustBePhoneNumber
      ),
    },
    password: {
      required: helpers.withMessage(
        "Vui lòng không bỏ trống mật khẩu.",
        required
      ),
    },
  };
});
const v$ = useVuelidate(rules, formData);

function handleErrorClass(condition) {
  return condition ? "error" : "";
}
function onClearData() {
  formData.value.phonenumber = "";
  formData.value.password = "";
}
async function onSubmitForm() {
  let isValidForm = await v$.value.$validate();
  if (isValidForm) {
    let res = await useAuthStore.signIn(formData.value);
    if (res.errMessage) {
      notificationStatusCreate.value.showAlert(
        "error",
        "Đăng nhập",
        res.errMessage
      );
    } else {
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
