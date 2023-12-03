<script setup>
import BaseButton from "@/components/admins/BaseButton.vue";
import CardBoxModal from "@/components/admins/CardBoxModal.vue";
import { mdiEye } from "@mdi/js";
import { computed, defineProps, ref } from "vue";
// store
import { useAuth } from "@/stores/auth.store";
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import { PERMISSION, vehicleStatus } from "@/ultils/constants";
import { storeToRefs } from "pinia";
defineProps({
  checkable: Boolean,
});
const vehicleStore = useVehicleInfoStore();
const authStore = useAuth();
const { userLoggedIn } = storeToRefs(authStore);
const { vehicleChecked } = storeToRefs(vehicleStore);
const isOwner = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.role == PERMISSION.OW
    ? true
    : false;
});
const uid = computed(() => {
  return userLoggedIn.value && userLoggedIn.value.uid
    ? userLoggedIn.value.uid
    : null;
});
vehicleStore.getVehicleChecked(vehicleStatus.DD);

const myVehicles = computed(() => {
  return vehicleChecked.value && vehicleChecked.value.length > 0
    ? vehicleChecked.value.filter((vehicle) => {
        return vehicle.uid == uid.value;
      })
    : [];
});

const onBuildVehiclename = (vehicle) => {
  const vehicleName = `${vehicle.brand} ${vehicle.name}`;
  return vehicleName.toLowerCase().replaceAll(" ", "-");
};

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

// const perPage = ref(5);

// const currentPage = ref(0);

// const checkedRows = ref([]);

// const itemsPaginated = computed(() =>
//   items.value.slice(
//     perPage.value * currentPage.value,
//     perPage.value * (currentPage.value + 1)
//   )
// );

// const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

// const currentPageHuman = computed(() => currentPage.value + 1);

// const pagesList = computed(() => {
//   const pagesList = [];

//   for (let i = 0; i < numPages.value; i++) {
//     pagesList.push(i);
//   }

//   return pagesList;
// });

// const remove = (arr, cb) => {
//   const newArr = [];

//   arr.forEach((item) => {
//     if (!cb(item)) {
//       newArr.push(item);
//     }
//   });

//   return newArr;
// };

// const checked = (isChecked, client) => {
//   if (isChecked) {
//     checkedRows.value.push(client);
//   } else {
//     checkedRows.value = remove(
//       checkedRows.value,
//       (row) => row.id === client.id
//     );
//   }
// };
</script>

<template>
  <div v-if="isOwner">
    <CardBoxModal v-model="isModalActive" title="Sample modal">
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>

    <CardBoxModal
      v-model="isModalDangerActive"
      title="Please confirm"
      button="danger"
      has-cancel
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>

    <div v-if="myVehicles.length > 0">
      <table class="w-full">
        <thead>
          <tr>
            <th v-if="checkable" />
            <th />
            <th>Tên xe</th>
            <th>Thương hiệu</th>
            <th>Năm sản xuất</th>
            <th>Biển số</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in myVehicles" :key="vehicle.car_id">
            <td class="border-b-0 lg:w-6 before:hidden"></td>
            <td>{{ vehicle.name }}</td>
            <td>{{ vehicle.brand }}</td>
            <td>{{ vehicle.year_manufacture }}</td>
            <td>{{ vehicle.numberPlate }}</td>
            <td class="before:hidden lg:w-1 whitespace-nowrap">
              <!-- <BaseButtons type="justify-start lg:justify-end" no-wrap> -->
              <router-link
                :to="{
                  name: 'vehicle-detail',
                  params: {
                    id: vehicle.car_id,
                    vehicle_name: onBuildVehiclename(vehicle),
                  },
                }"
              >
                <BaseButton color="info" :icon="mdiEye" small></BaseButton>
              </router-link>

              <!-- <BaseButton
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true"
                /> -->
              <!-- </BaseButtons> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">
      <img
        class="mx-auto"
        src="https://www.mioto.vn/static/media/empty-mycar.e023e681.svg"
        alt="img"
      />
      <h3 class="text-gray-400 font-semibold text-lg">
        Hiện tại, bạn chưa có xe trên hệ thống.
      </h3>
    </div>
  </div>
  <div v-else class="text-center">
    <img
      class="mx-auto"
      src="https://www.mioto.vn/static/media/empty-mycar.e023e681.svg"
      alt="img"
    />
    <h3 class="text-gray-400 font-semibold text-lg">
      Hãy trở thành chủ xe để có thể đăng xe cho thuê.
    </h3>
  </div>
</template>
