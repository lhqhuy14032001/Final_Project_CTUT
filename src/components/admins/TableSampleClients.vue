<template>
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
          />
        </div>
      </div>

      <div class="row flex xl:justify-between">
        <div class="mr-2 w-full">
          <label for="lastname" class="block text-left font-semibold">Họ</label>
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
  </CardBoxModal>
  <!-- END: MODAL DETAIL ACCOUNT -->

  <!-- START: MODAL UPDATE ACCOUNT -->
  <CardBoxModal
    v-model="isModalUpdateActive"
    title="Cập nhật tài khoản"
    has-cancel
    has-button-confirm
    button="info"
    button-label="Cập nhật"
    :alert-type="stateUpdateAccount ? 'success' : 'error'"
    alert-title="Cập nhật người dùng"
    :alert-content="
      stateUpdateAccount
        ? 'Cập nhật người dùng thành công!'
        : 'Cập nhật người dùng thất bại!'
    "
  >
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

      <div class="row flex xl:justify-between">
        <div class="mr-2 w-full">
          <label for="lastname" class="block text-left font-semibold">Họ</label>
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
  </CardBoxModal>
  <!-- END: MODAL UPDATE ACCOUNT -->

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
  >
    <p>Bạn có chắc chắn muốn xoá tài khoản này?</p>
    <p>Lưu ý: KHÔNG thể khôi phục dữ liệu tài khoản sau khi đã xoá.</p>
  </CardBoxModal>
  <!-- END: CONFIRM DELETE -->

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table class="w-full">
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Họ tên</th>
        <th>Công ty</th>
        <th>Địa chỉ</th>
        <th>Phân hệ</th>
        <th>Ngày tạo</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar
            :username="client.name"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          />
        </td>
        <td>
          {{ client.name }}
        </td>
        <td>
          {{ client.company }}
        </td>
        <td>
          {{ client.city }}
        </td>
        <td class="lg:w-32">
          {{ client.role }}
        </td>
        <td class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="client.created"
            >{{ client.created }}</small
          >
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="isModalDetailActive = !isModalDetailActive"
            />
            <BaseButton
              color="danger"
              :icon="mdiUpdate"
              small
              @click="isModalUpdateActive = !isModalUpdateActive"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDeleteActive = !isModalDeleteActive"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
<script setup>
import { computed, ref, defineProps } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiEye, mdiTrashCan, mdiUpdate } from "@mdi/js";
import CardBoxModal from "@/components/admins/CardBoxModal.vue";
import TableCheckboxCell from "@/components/admins/TableCheckboxCell.vue";
import BaseLevel from "@/components/admins/BaseLevel.vue";
import BaseButtons from "@/components/admins/BaseButtons.vue";
import BaseButton from "@/components/admins/BaseButton.vue";
import UserAvatar from "@/components/admins/UserAvatar.vue";

defineProps({
  checkable: Boolean,
});

const mainStore = useMainStore();

const items = computed(() => mainStore.clients);

const isModalDetailActive = ref(false);

const isModalUpdateActive = ref(false);

const isModalDeleteActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};

// Status of API return to alert
const stateDeleteAccount = ref(false);
const stateUpdateAccount = ref(false);
</script>
