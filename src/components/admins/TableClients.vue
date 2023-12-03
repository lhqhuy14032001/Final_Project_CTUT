<template>
  <VueBasicAlert
    :duration="1000"
    :closeIn="5000"
    ref="notificationStatusCreate"
  />

  <!-- START: MODAL DETAIL ACCOUNT -->
  <CardBoxModal
    v-model="isModalDetailActive"
    title="Chi tiết tài khoản"
    has-cancel
  >
    <form class="flex flex-col justify-start space-y-6">
      <div class="row flex flex-col">
        <label for="email" class="mr-auto font-semibold">Email</label>
        <div class="border-b-2">
          <input
            class="focus:ring-0 border-none w-full text-fz-16 pl-0"
            type="email"
            id="email"
            v-model="userEmail"
          />
        </div>
      </div>
      <div class="row flex flex-col">
        <label for="email" class="mr-auto font-semibold">Số điện thoại</label>
        <div class="border-b-2">
          <input
            class="focus:ring-0 border-none w-full text-fz-16 pl-0"
            type="email"
            id="email"
            v-model="phonenumber"
          />
        </div>
      </div>
      <div class="row flex flex-col">
        <label for="email" class="mr-auto font-semibold">Họ tên</label>
        <div class="border-b-2">
          <input
            class="focus:ring-0 border-none w-full text-fz-16 pl-0"
            type="email"
            id="email"
            v-model="fullname"
          />
        </div>
      </div>
      <div class="row flex flex-col">
        <label for="email" class="mr-auto font-semibold">Phân hệ</label>
        <div class="border-b-2">
          <input
            class="focus:ring-0 border-none w-full text-fz-16 pl-0"
            type="email"
            id="email"
            v-model="userRole"
          />
        </div>
      </div>
    </form>
  </CardBoxModal>
  <!-- END: MODAL DETAIL ACCOUNT -->
  <!-- START: CONFIRM DELETE -->
  <CardBoxModal
    v-model="isModalDeleteActive"
    title="Xác nhận xoá"
    button="danger"
    button-label="Xác nhận"
    has-cancel
    has-button-confirm
    :alert-type="stateDeleteAccount ? 'success' : 'error'"
    alert-title="Xoá người dùng"
    :alert-content="
      stateDeleteAccount
        ? 'Xoá người dùng thành công!'
        : 'Xoá người dùng thất bại!'
    "
    @deleteUser="confirmDelete"
  >
    <p>Bạn có chắc chắn muốn xoá tài khoản này?</p>
    <p>
      Lưu ý: Các xe đã đăng ký cho thuê sẽ bị xoá và
      <strong>KHÔNG THỂ</strong> khôi phục dữ liệu tài khoản sau khi đã xoá.
    </p>
  </CardBoxModal>
  <!-- END: CONFIRM DELETE -->
  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
    </span>
  </div>
  <div class="my-3 p-4">
    <p class="text-left font-semibold">Lọc theo quyền</p>
    <VueMultiselect
      @select="userStore.getUserByRole"
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
  <div class="" v-if="userFilter.length < 0">asdasd</div>
  <table class="w-full">
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>STT</th>
        <th>Họ tên</th>
        <th>E-mail</th>
        <th>Số điện thoại</th>
        <th>Phân hệ</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.uid">
        <td>{{ index + 1 }}</td>
        <td>{{ user.fullname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phonenumber }}</td>
        <td class="lg:w-32">{{ getRoleToShow(user.role) }}</td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="hanldeShowUser(user)"
            />
            <!-- <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="getUserDelete(user)"
            /> -->
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    v-if="!isShowViewMore"
    class="m-3 py-3 px-5 rounded-lg bg-primary font-semibold text-white cursor-pointer"
    @click="userStore.getUserListViewMore"
  >
    Xem thêm
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { mdiEye } from "@mdi/js";
import CardBoxModal from "@/components/admins/CardBoxModal.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import VueMultiselect from "vue-multiselect";
import VueBasicAlert from "vue-basic-alert";

// constan
import { PERMISSION } from "@/ultils/constants";
// store
import { useUser } from "@/stores/user.store";
// import { useAuth } from "@/stores/auth.store";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { watch } from "vue";

const checkedRows = ref([]);
const userStore = useUser();
// const autStore = useAuth();
// const { adminLogin } = storeToRefs(autStore);
// get state
const getRoleToShow = (role) => {
  let label;
  switch (role) {
    case PERMISSION.AD:
      label = "Quản trị viên";
      break;
    case PERMISSION.OW:
      label = "Chủ xe";
      break;
    case PERMISSION.CUS:
      label = "Khách hàng";
      break;
  }
  return label;
};
const notificationStatusCreate = ref(null);

const permissions = [
  { id: 1, label: "Tất cả", code: "ALL" },
  { id: 2, label: "Quản trị viên", code: PERMISSION.AD },
  { id: 3, label: "Chủ xe", code: PERMISSION.OW },
  { id: 4, label: "Khách hàng", code: PERMISSION.CUS },
];
const roleShow = ref(null);
// call API
userStore.getUserList();
const { userList, userFilter, isShowAlert, isShowViewMore } =
  storeToRefs(userStore);
let users = computed(() => {
  return userFilter.value.length > 0 ? userFilter.value : userList.value;
});
watch(isShowAlert, (newState) => {
  if (newState) {
    notificationStatusCreate.value.showAlert(
      "error",
      "Thông báo",
      "Không có tài khoản thoả điều kiện lọc."
    );
    isShowAlert.value = false;
  }
});

defineProps({
  checkable: Boolean,
});

// Status of API return to alert
const stateDeleteAccount = ref(false);

const isModalDetailActive = ref(false);
const isModalDeleteActive = ref(false);
// show user detail
const userEmail = ref(null);
const fullname = ref(null);
const phonenumber = ref(null);
const userRole = ref(null);
const userDelete = ref(null);

function hanldeShowUser(user) {
  userEmail.value = user.email || "-";
  fullname.value = user.fullname || "-";
  phonenumber.value = user.phonenumber || "-";
  userRole.value = getRoleToShow(user.role);
  isModalDetailActive.value = !isModalDetailActive.value;
}
// function getUserDelete(user) {
//   isModalDeleteActive.value = !isModalDeleteActive.value;
//   userDelete.value = user;
//   if (adminLogin.value.uid === user.uid) {
//     isModalDeleteActive.value = !isModalDeleteActive.value;
//     notificationStatusCreate.value.showAlert(
//       "error",
//       "Thông báo",
//       "Bạn không thể xoá chính mình."
//     );
//   }
// }
function confirmDelete() {
  userStore.deleteUser(userDelete.value);
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
