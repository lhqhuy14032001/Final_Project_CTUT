<template>
  <VueBasicAlert
    :duration="1000"
    :closeIn="5000"
    ref="notificationStatusCreate"
  />
  <SectionMain>
    <SectionTitle first title="Thêm xe" main :icon="mdiPlus"></SectionTitle>
    <div class="h-full">
      <form class="flex flex-col justify-start space-y-6">
        <div class="row flex flex-col">
          <label for="car-name" class="mr-auto font-semibold">Tên xe</label>
          <div class="border-b-2">
            <input
              class="focus:ring-0 border-none w-full text-fz-16 pl-0 mt-2"
              type="email"
              id="car-name"
            />
          </div>
        </div>
        <div class="row grid grid-cols-2 gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="row flex flex-col">
              <label for="price-hire" class="mr-auto font-semibold">
                Giá cho thuê
              </label>
              <div class="border-b-2 mt-2">
                <input
                  class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                  type="text"
                  id="price-hire"
                />
              </div>
            </div>
            <div class="row flex flex-col">
              <label for="price-hire" class="mr-auto font-semibold">
                Biển số xe
              </label>
              <div class="border-b-2 mt-2">
                <input
                  class="focus:ring-0 border-none w-full text-fz-16 pl-0"
                  type="text"
                  id="price-hire"
                />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-left">
              <div class="flex flex-col">
                <label for="car-name" class="mr-auto font-semibold">
                  Tài sản thế chấp
                </label>
                <VueMultiselect
                  class="mt-2"
                  v-model="selected"
                  :options="deposit"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn tài sản thế chấp"
                  label="label"
                  track-by="value"
                ></VueMultiselect>
              </div>
            </div>
            <div>
              <p class="font-semibold">Bảo hiểm vật chất</p>
              <div class="flex-col mt-4">
                <label for="physical_damage_coverage" class="mr-4">
                  Có
                  <input
                    v-model="physicalDamageCoverage"
                    id="physical_damage_coverage"
                    type="radio"
                    value="1"
                    name="physical_damage_coverage"
                  />
                </label>
                <label for="not-physical_damage_coverage">
                  Không
                  <input
                    v-model="physicalDamageCoverage"
                    id="not-physical_damage_coverage"
                    type="radio"
                    value="0"
                    name="physical_damage_coverage"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="physicalDamageCoverage == true"
          class="row grid grid-cols-2 gap-4"
        >
          <div class="row flex flex-col">
            <label for="insurance-brand" class="mr-auto font-semibold"
              >Hãng bảo hiểm</label
            >
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0 mt-2"
                type="email"
                id="insurance-brand"
              />
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="insurance-fee" class="mr-auto font-semibold"
              >Số tiền bảo hiểm</label
            >
            <div class="border-b-2">
              <input
                class="focus:ring-0 border-none w-full text-fz-16 pl-0 mt-2"
                type="number"
                id="insurance-fee"
              />
            </div>
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
  </SectionMain>
</template>
<script setup>
import { ref } from "vue";
import VueBasicAlert from "vue-basic-alert";
import VueMultiselect from "vue-multiselect";
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitle from "@/components/admins/SectionTitle";
import { mdiPlus } from "@mdi/js";
import { useMainStore } from "@/stores/main";

const fuel = ref(0);

const mainStore = useMainStore();

// const notificationStatusCreate = ref(null);
// notificationStatusCreate.value.showAlert(
//   "success",
//   "Tạo tài khoản",
//   "Tạo tài khoản thành công"
// );
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

// physical_damage_coverage
const physicalDamageCoverage = ref(false);

if (physicalDamageCoverage.value == 1) physicalDamageCoverage.value = true;
else physicalDamageCoverage.value = false;
const deposit = mainStore.deposit;
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="css" scoped>
input[type="range"] {
  accent-color: #5fcf86;
}
</style>
