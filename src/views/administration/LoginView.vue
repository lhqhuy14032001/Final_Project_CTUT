<script setup>
import { ref, computed } from "vue";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/admins/SectionFullScreen.vue";
import CardBox from "@/components/admins/CardBox.vue";
import FormField from "@/components/admins/FormField.vue";
import FormControl from "@/components/admins/FormControl.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import VueBasicAlert from "vue-basic-alert";
// validate form
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
// router
import { useRouter } from "vue-router";
// store
import { useAuth } from "@/stores/auth.store";
// regex
import { regexPassword } from "@/ultils/constants";

const authStore = useAuth();
const router = useRouter();
const notificationStatusCreate = ref(null);

const form = ref({
  email: null,
  password: null,
});
const validPassword = helpers.regex(regexPassword);
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Vui lòng không bỏ trống email.", required),
      email: helpers.withMessage(
        "Vui lòng cung cấp e-mail đúng định dạng",
        email
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
const v$ = useVuelidate(rules, form.value);

function onClearData() {
  form.value.email = "";
  form.value.password = "";
}
const signIn = async () => {
  let isValidForm = await v$.value.$validate();
  if (isValidForm) {
    let data = await authStore.signIn(form.value);
    if (!data.errMessage) {
      router.push({ name: "home-admin", params: {} });
    } else {
      notificationStatusCreate.value.showAlert(
        "error",
        "Đăng nhập",
        data.errMessage
      );
      onClearData();
      v$.value.$reset();
    }
  }
};
</script>

<template>
  <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
    <VueBasicAlert
      :duration="1000"
      :closeIn="5000"
      ref="notificationStatusCreate"
    />
    <CardBox :class="cardClass" is-form @submit.prevent="submit">
      <h1 class="text-left font-semibold text-3xl my-10">Quản trị</h1>
      <div class="my-3">
        <FormField label="Tài khoản">
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            name="login"
            placeholder="Email"
          />
        </FormField>
        <p v-if="v$.email.$error" class="text-red-600 text-left mt-[-15px]">
          <span v-for="error in v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </p>
      </div>
      <div>
        <FormField label="Mật khẩu">
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            placeholder="Mật khẩu"
          />
        </FormField>
        <p v-if="v$.password.$error" class="text-red-600 text-left mt-[-15px]">
          <span v-for="error in v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </p>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <BaseButtons>
            <BaseButton @click="signIn" color="info" label="Đăng nhập" />
            <BaseButton
              to="/"
              color="info"
              outline
              label="Trang chủ người dùng"
            />
          </BaseButtons>
        </div>
      </template>
    </CardBox>
  </SectionFullScreen>
</template>
