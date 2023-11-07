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
import VueMultiselect from "vue-multiselect";
// constant
import {
  PERMISSION,
  regexPassword,
  regexPhoneNumber,
} from "@/ultils/constants";
// vue-validate
import { useVuelidate } from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";
// axios API
import userAPI from "@/apis/AdminAPI/user.api";

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
const permissions = [
  { id: 1, label: "Quản trị viên", code: PERMISSION.AD },
  { id: 2, label: "Chủ xe", code: PERMISSION.OW },
  { id: 3, label: "Khách hàng", code: PERMISSION.CUS },
];
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

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
});
const isShowPassword = ref(false);
// init ref data user
const user = ref({
  role: "",
  email: null,
  phonenumber: null,
  password: null,
  fullname: null,
});

const roleShow = ref(null);
const getRole = (role) => {
  user.value.role = role.code;
};
// validate data
// custom rules
const mustBePhoneNumber = helpers.regex(regexPhoneNumber);
const validPassword = helpers.regex(regexPassword);
// init rules
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage(
        "Vui lòng không bỏ trống e-mail.",
        required
      ),
      email: helpers.withMessage(
        "Vui lòng cung cấp email đứng định dạng.",
        email
      ),
    },
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
    fullname: {
      required: helpers.withMessage(
        "Vui lòng không bỏ trống họ tên.",
        required
      ),
    },
    password: {
      required: helpers.withMessage(
        "Vui lòng không bỏ trống mật khẩu.",
        required
      ),
      validatePassword: helpers.withMessage(
        "Mật khẩu có ít nhất 8 ký tự, có ít nhất một chữ số và một ký tự đặc biệt.",
        validPassword
      ),
    },
  };
});
function handleErrorClass(condition) {
  return condition ? "error" : "";
}
function onClearData() {
  user.value = ref({
    role: "",
    email: null,
    phonenumber: null,
    password: null,
    fullname: null,
  });
}
const v$ = useVuelidate(rules, user);
// submit form
const handleCreateUser = async () => {
  let isValid = await v$.value.$validate();
  if (isValid) {
    try {
      // call API
      let res = await userAPI.createUser(user.value);
      if (res.status === 201) {
        notificationStatusCreate.value.showAlert(
          "success",
          "Tạo tài khoản",
          "Tạo tài khoản thành công"
        );
      }
      v$.value.$reset();
      onClearData();
      cancel();
    } catch (error) {
      console.error(error.response.data);
      notificationStatusCreate.value.showAlert(
        "error",
        "Tạo tài khoản",
        error.response.data.message
      );
    }
  }
};
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
          <div class="text-left">
            <label for="" class="text-left mr-auto font-semibold">
              Chọn phân hệ
            </label>
            <VueMultiselect
              @select="getRole"
              class="mt-2"
              v-model="roleShow"
              :options="permissions"
              selectLabel="Nhấn Enter để chọn"
              :close-on-select="true"
              :clear-on-select="false"
              placeholder="Chọn phân hệ"
              label="label"
              track-by="id"
            ></VueMultiselect>
          </div>
          <div class="row flex flex-col">
            <label for="email" class="mr-auto font-semibold">Email</label>
            <div class="border-b-2" :class="handleErrorClass(v$.email.$error)">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                type="email"
                id="email"
                v-model="user.email"
              />
            </div>
            <p v-if="v$.email.$error" class="text-error">
              <span v-for="error in v$.email.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </p>
          </div>
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
                v-model="user.phonenumber"
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
              class="block border-b-2 border-gray-300"
              :class="handleErrorClass(v$.password.$error)"
            >
              <input
                class="w-[90%] border-none focus:ring-0 text-fz-16 pl-0"
                :type="isShowPassword ? 'password' : 'text'"
                id="password"
                v-model="user.password"
              />
              <BaseIcon
                @click="isShowPassword = !isShowPassword"
                :path="isShowPassword ? mdiEyeOff : mdiEye"
              ></BaseIcon>
            </div>
            <p v-if="v$.password.$error" class="text-error">
              <span v-for="error in v$.password.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </p>
          </div>
          <div class="row flex xl:justify-between">
            <div class="mr-2 w-full">
              <label for="fullname" class="block text-left font-semibold"
                >Tên hiển thị</label
              >
              <div
                class="border-b-2"
                :class="handleErrorClass(v$.fullname.$error)"
              >
                <input
                  class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                  type="text"
                  id="fullname"
                  v-model="user.fullname"
                />
              </div>
              <p v-if="v$.fullname.$error" class="text-error">
                <span v-for="error in v$.fullname.$errors" :key="error.$uid">
                  {{ error.$message }}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <template #footer>
        <BaseButtons class="flex justify-end">
          <BaseButton
            :label="buttonLabel"
            :color="button"
            @click="handleCreateUser"
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
