<template>
  <VueBasicAlert :duration="1000" :closeIn="5000" ref="notificationStatus" />
  <SectionMain>
    <SectionTitle first title="Thêm xe" main :icon="mdiPlus"></SectionTitle>
    <div class="h-full">
      <form class="flex flex-col justify-start space-y-6">
        <div class="row grid grid-cols-2 gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Hãng xe
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedBrand"
                :options="carBrands"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn hãng xe"
                label="label"
                track-by="brand_id"
                @select="getBrand"
              ></Multiselect>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Loại xe
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedType"
                :options="carTypes"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn loại xe"
                label="label"
                track-by="type_id"
                @select="getType"
              ></Multiselect>
            </div>
          </div>
          <div class="flex flex-col">
            <label for="car-name" class="mr-auto font-semibold">Tên xe</label>
            <div class="">
              <input
                v-model="carName"
                class="rounded-lg border border-gray-500focus:ring-0 border-none w-full text-fz-16 mt-2 px-2"
                type="email"
                id="car-name"
              />
            </div>
          </div>
        </div>
        <div class="row grid grid-cols-2 gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="row flex flex-col">
              <label for="price-hire" class="mr-auto font-semibold">
                Giá cho thuê
              </label>
              <div class="mt-2">
                <input
                  v-model="hirePrice"
                  class="rounded-lg border border-gray-500focus:ring-0 border-none w-full text-fz-16"
                  type="text"
                  id="price-hire"
                />
              </div>
            </div>
            <div class="row flex flex-col">
              <label for="price-hire" class="mr-auto font-semibold">
                Biển số xe
              </label>
              <div class="mt-2">
                <input
                  v-model="numberPlate"
                  class="rounded-lg border border-gray-500focus:ring-0 border-none w-full text-fz-16"
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
                <Multiselect
                  class="mt-2"
                  v-model="selectedDeposit"
                  :options="deposit"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn tài sản thế chấp"
                  label="label"
                  track-by="value"
                  @select="getDeposit"
                ></Multiselect>
              </div>
            </div>
            <div>
              <p class="font-semibold">Bảo hiểm vật chất</p>
              <div class="flex-col mt-4">
                <label for="physical_damage_coverage" class="mr-4">
                  Có
                  <input
                    v-model="PDC_state"
                    rounded-lg
                    id="physical_damage_coverage"
                    type="radio"
                    :value="true"
                    name="physical_damage_coverage"
                  />
                </label>
                <label for="not-physical_damage_coverage">
                  Không
                  <input
                    v-model="PDC_state"
                    rounded-lg
                    id="not-physical_damage_coverage"
                    type="radio"
                    :value="false"
                    name="physical_damage_coverage"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div v-if="PDC_state == true" class="row grid grid-cols-2 gap-4">
          <div class="row flex flex-col">
            <label for="insurance-brand" class="mr-auto font-semibold"
              >Hãng bảo hiểm</label
            >
            <div class="">
              <input
                v-model="PDC_brand"
                class="rounded-lg border border-gray-500 focus:ring-0 border-none w-full text-fz-16 mt-2"
                type="email"
                id="insurance-brand"
              />
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="insurance-fee" class="mr-auto font-semibold"
              >Số tiền bảo hiểm</label
            >
            <div class="">
              <input
                v-model="PDC_fee"
                class="rounded-lg border border-gray-500 focus:ring-0 border-none w-full text-fz-16 mt-2"
                type="number"
                id="insurance-fee"
              />
            </div>
          </div>
        </div>
        <div class="row grid grid-cols-2 gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Hộp số
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedGearbox"
                :options="gearBoxes"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn hộp số"
                label="label"
                track-by="gearbox_id"
                @select="getGearbox"
              ></Multiselect>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Loại nhiên liệu
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedFuel"
                :options="fuels"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn loại nhiên liệu"
                label="label"
                track-by="fuel_id"
                @select="getFuel"
              ></Multiselect>
            </div>
          </div>
          <div class="flex flex-col">
            <label for="car-name" class="mr-auto font-semibold"
              >Mức tiêu hao nhiên liệu</label
            >
            <div class="mt-2">
              <input
                class="rounded-lg border border-gray-500 block w-full"
                v-model="avgFuel"
                type="range"
                min="0"
                max="30"
                step="5"
              />
              <div class="mt-2">Dưới {{ avgFuel }}/100km</div>
            </div>
          </div>
        </div>
        <div class="row grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label for="car-name" class="mr-auto font-semibold">
              Năm sản xuất
            </label>
            <Multiselect
              class="mt-2"
              v-model="selectedDate"
              :options="manufactureYearList"
              selectLabel="Nhấn Enter để chọn"
              :close-on-select="true"
              :clear-on-select="false"
              placeholder="Chọn năm sản xuất"
              label="label"
              track-by="value"
              @select="getYear"
            ></Multiselect>
          </div>
          <div class="flex flex-col">
            <label for="car-name" class="mr-auto font-semibold">
              Tính năng
            </label>
            <Multiselect
              class="mt-2"
              v-model="selectedFeature"
              :options="features"
              selectLabel="Nhấn Enter để chọn"
              :close-on-select="true"
              :clear-on-select="false"
              placeholder="Chọn tính năng"
              label="label"
              track-by="feature_id"
              :multiple="true"
            ></Multiselect>
          </div>
        </div>
        <div class="row grid grid-cols-2 gap-4">
          <div class="flex flex-col p-1">
            <label for="address" class="mr-auto font-semibold"> Địa chỉ </label>
            <div class="">
              <input
                v-model="addressDetail"
                class="rounded-lg focus:ring-0 border-none w-full text-fz-16 mt-2"
                type="text"
                id="address"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Tỉnh/Thành Phố
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedProvince"
                :options="provinces"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn tỉnh/thành phố"
                label="prov_name"
                track-by="prov_id"
                @select="getProvince"
              ></Multiselect>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">
                Quận/Huyện
              </label>
              <Multiselect
                class="mt-2"
                v-model="selectedDistrict"
                :options="districts"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn quận/huyện"
                label="district_name"
                track-by="district_id"
                @select="getDistrict"
              ></Multiselect>
            </div>
          </div>
        </div>
        <div class="row flex flex-col">
          <label for="address" class="font-semibold block mr-auto mb-2">
            Mô tả
          </label>
          <CKEditorCustom></CKEditorCustom>
        </div>
      </form>
      <div class="row mt-3">
        <button
          @click="stateUpdateFunction"
          class="px-4 py-2 w-full bg-primary text-white hover:opacity-70 rounded font-semibold"
          :class="{ 'bg-amber-200': stateUpdate }"
        >
          {{ stateUpdateRender }}
        </button>
      </div>
    </div>
  </SectionMain>
</template>
<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import VueBasicAlert from "vue-basic-alert";
import Multiselect from "vue-multiselect";
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitle from "@/components/admins/SectionTitle.vue";
import { mdiPlus } from "@mdi/js";
import { useVehicleInfoStore } from "@/stores/vehicle.store";
import CKEditorCustom from "@/components/CKEditorCustom.vue";

// Store
const vehicleInfo = useVehicleInfoStore();

const carName = ref("");
const hirePrice = ref(null);
const numberPlate = ref("");
watch(
  [carName, hirePrice, numberPlate],
  ([newCarName, newHirePrice, newNumberPlate]) => {
    vehicleInfo.carInfor.carName = newCarName;
    vehicleInfo.carInfor.hirePrice = newHirePrice;
    vehicleInfo.carInfor.numberPlate = newNumberPlate;
  }
);

// brand
const selectedBrand = ref(null);
const carBrands = vehicleInfo.brands;
const getBrand = (brand) => {
  vehicleInfo.carInfor.brand_id = brand.label;
};

// car type
const selectedType = ref(null);
const carTypes = vehicleInfo.car_types;
const getType = (type) => {
  vehicleInfo.carInfor.carType_id = type.label;
};

// gearboxes
const selectedGearbox = ref(null);
const gearBoxes = vehicleInfo.gearboxes;
const getGearbox = (gearbox) =>
  (vehicleInfo.carInfor.gearbox_id = gearbox.label);

// fuels
const selectedFuel = ref(null);
const fuels = vehicleInfo.fuels;
const getFuel = (fuel) => (vehicleInfo.carInfor.fuel_id = fuel.label);

// Physical Damage Coverage => PDC
const PDC_state = ref(false);
const PDC_brand = ref(null);
const PDC_fee = ref(null);
watch([PDC_brand, PDC_fee, PDC_state], ([PDC_brand, PDC_fee, PDC_state]) => {
  if (PDC_state) {
    vehicleInfo.carInfor.physicalDamageCoverageState = true;
    vehicleInfo.carInfor.physicalDamageCoverageFee = PDC_fee;
    vehicleInfo.carInfor.physicalDamageCoverageBrand = PDC_brand;
  } else {
    vehicleInfo.carInfor.physicalDamageCoverageState = false;
  }
});
// average fuel
const avgFuel = ref(0);
watch(avgFuel, (newAvgFuel) => {
  vehicleInfo.carInfor.averageFuel = newAvgFuel;
});

// features
const selectedFeature = ref([]);
const features = vehicleInfo.features;
watchEffect(() => {
  let lengthselectedFeature = selectedFeature.value.length;
  for (let index = 0; index <= lengthselectedFeature; index++) {
    if (index === lengthselectedFeature - 1) {
      vehicleInfo.carInfor.features_id.push(
        selectedFeature.value[index].feature_id
      );
    }
  }
});

// deposit
const deposit = vehicleInfo.deposit;
const selectedDeposit = ref(null);
const getDeposit = (deposit) => {
  vehicleInfo.carInfor.deposit = deposit;
};

// detail address
const addressDetail = ref(null);
watch(addressDetail, (addressDetail) => {
  vehicleInfo.carInfor.address.addressDetail = addressDetail;
});

// district
const selectedDistrict = ref(null);
const districts = vehicleInfo.districts;
const getDistrict = (district) => {
  vehicleInfo.carInfor.address.district_id = district.district_id;
};

// province
const selectedProvince = ref(null);
const provinces = vehicleInfo.provinces;
const getProvince = (province) => {
  vehicleInfo.carInfor.address.prov_id = province.prov_id;
};

const stateUpdate = ref(false);

const stateUpdateRender = computed(() => {
  return stateUpdate.value ? "Cập nhật" : "Lưu";
});

const stateUpdateFunction = computed(() => {
  return stateUpdate.value ? updateButton : createButton;
});

// alert status
const notificationStatus = ref(null);
const alertAStatus = () => {
  notificationStatus.value.showAlert(
    "success",
    stateUpdate.value ? "Cập nhật thông tin xe" : "Thêm thông tin xe",
    stateUpdate.value ? "Cập nhật thành công" : "Thêm thông tin thành công"
  );
};

// manufacture year
const selectedDate = ref("");
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
const getYear = (year) => {
  vehicleInfo.carInfor.manufactureYear = year.value;
};

const createButton = () => {
  alertAStatus();
};

const updateButton = () => {
  alertAStatus();
};

vehicleInfo.$subscribe((mutation, { carInfor }) => {
  console.log(carInfor);
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="css" scoped>
input[type="range"] {
  accent-color: #5fcf86;
}
</style>
