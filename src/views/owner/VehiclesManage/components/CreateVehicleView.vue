<template>
  <SectionMain>
    <div v-if="userLoggedIn && userLoggedIn.role === '1111'">
      <VueBasicAlert
        :duration="1000"
        :closeIn="5000"
        ref="notificationStatus"
      />
      <SectionTitle
        first
        title="Đăng ký xe"
        main
        :icon="mdiPlus"
      ></SectionTitle>
      <p class="my-5 text-base text-left font-semibold text-red-500">
        ***Lưu ý: Thông tin đăng ký không thể chỉnh sửa. Nếu thông tin cung cấp
        không hợp lệ MiAUTO sẽ xoá thông tin đăng ký và chủ xe phải đăng ký lại.
      </p>
      <div class="h-full">
        <form class="flex flex-col justify-start space-y-6">
          <div class="row grid grid-cols-2 gap-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label for="brands" class="mr-auto font-semibold">
                  Hãng xe
                </label>
                <Multiselect
                  class="mt-2"
                  v-model="selectedBrand"
                  :options="brands"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn hãng xe"
                  label="label"
                  track-by="brand_id"
                  @select="getBrand"
                ></Multiselect>
                <p v-if="errList.brand" class="text-error">Chọn hãng xe.</p>
              </div>
              <div class="flex flex-col">
                <label for="car-name" class="mr-auto font-semibold">
                  Loại xe
                </label>
                <Multiselect
                  class="mt-2"
                  v-model="selectedType"
                  :options="car_types"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn loại xe"
                  label="label"
                  track-by="type_id"
                  @select="getType"
                ></Multiselect>
                <p v-if="errList.carType" class="text-error">Chọn loại xe.</p>
              </div>
            </div>
            <div class="flex flex-col">
              <label for="car-name" class="mr-auto font-semibold">Tên xe</label>
              <div class="">
                <input
                  v-model="carName"
                  class="rounded-lg border border-gray-200 focus:ring-0 w-full text-fz-16 mt-2 px-2"
                  type="email"
                  id="car-name"
                />
              </div>
              <p v-if="errList.carName && carName === null" class="text-error">
                Nhập tên xe.
              </p>
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
                    class="rounded-lg border border-gray-200 w-full text-fz-16"
                    type="text"
                    id="price-hire"
                  />
                </div>
                <p v-if="errList.hirePrice" class="text-error">
                  Nhập giá cho thuê.
                </p>
              </div>
              <div class="row flex flex-col">
                <label for="price-hire" class="mr-auto font-semibold">
                  Biển số xe
                </label>
                <div class="mt-2">
                  <input
                    v-model="numberPlate"
                    class="rounded-lg border border-gray-200 w-full text-fz-16"
                    type="text"
                    id="price-hire"
                  />
                </div>
                <p
                  v-if="errList.numberPlate && numberPlate === null"
                  class="text-error"
                >
                  Nhập biển số xe.
                </p>
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
                    :options="deposits"
                    selectLabel="Nhấn Enter để chọn"
                    :close-on-select="true"
                    :clear-on-select="false"
                    placeholder="Chọn tài sản thế chấp"
                    label="label"
                    track-by="value"
                    @select="getDeposit"
                  ></Multiselect>
                  <p v-if="errList.deposit" class="text-error">
                    Chọn tài sản thế chấp.
                  </p>
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
                      :value="1"
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
                      :value="0"
                      name="physical_damage_coverage"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div v-if="PDC_state === 1" class="row grid grid-cols-2 gap-4">
            <div class="row flex flex-col">
              <label for="insurance-brand" class="mr-auto font-semibold"
                >Hãng bảo hiểm</label
              >
              <div class="">
                <input
                  v-model="PDC_brand"
                  class="rounded-lg border border-gray-200 focus:ring-0 w-full text-fz-16 mt-2"
                  type="email"
                  id="insurance-brand"
                />
              </div>
              <p v-if="errList.physicalDamageCoverageBrand" class="text-error">
                Nhập tên công ty bảo hiểm.
              </p>
            </div>
            <div class="row flex flex-col">
              <label for="insurance-fee" class="mr-auto font-semibold"
                >Số tiền bảo hiểm</label
              >
              <div class="">
                <input
                  v-model="PDC_fee"
                  class="rounded-lg border border-gray-200 w-full text-fz-16 mt-2"
                  type="number"
                  id="insurance-fee"
                />
              </div>
              <p v-if="errList.physicalDamageCoverageFee" class="text-error">
                Nhập phí bảo hiểm.
              </p>
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
                  :options="gearboxes"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn hộp số"
                  label="label"
                  track-by="gearbox_id"
                  @select="getGearbox"
                ></Multiselect>
                <p v-if="errList.gearbox" class="text-error">
                  Chọn loại hộp số.
                </p>
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
                <p v-if="errList.fuel" class="text-error">
                  Chọn loại nhiên liệu.
                </p>
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
                :options="manufactureYearList.reverse()"
                selectLabel="Nhấn Enter để chọn"
                :close-on-select="true"
                :clear-on-select="false"
                placeholder="Chọn năm sản xuất"
                label="label"
                track-by="value"
                @select="getYear"
              ></Multiselect>
              <p v-if="errList.year" class="text-error">Chọn năm sản xuất.</p>
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
              <p
                v-if="errList.features && selectedFeature.length === 0"
                class="text-error"
              >
                Chọn các tính năng.
              </p>
            </div>
          </div>
          <div class="row grid grid-cols-2 gap-4">
            <div class="flex flex-col p-1">
              <label for="address" class="mr-auto font-semibold">
                Địa chỉ
              </label>
              <div class="">
                <input
                  v-model="addressDetail"
                  class="rounded-lg border border-gray-200 w-full text-fz-16 mt-2"
                  type="text"
                  id="address"
                />
              </div>
              <p
                v-if="errList.addressDetail && addressDetail === null"
                class="text-error"
              >
                Nhập địa chỉ.
              </p>
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
                <p v-if="errList.prov" class="text-error">Chọn tỉnh.</p>
              </div>
              <div class="flex flex-col">
                <label for="car-name" class="mr-auto font-semibold">
                  Quận/Huyện
                </label>
                <Multiselect
                  class="mt-2"
                  v-model="selectedDistrict"
                  :options="districtsVal"
                  selectLabel="Nhấn Enter để chọn"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Chọn quận/huyện"
                  label="district_name"
                  track-by="district_id"
                  @select="getDistrict"
                ></Multiselect>
                <p v-if="!errList.prov && errList.district" class="text-error">
                  Chọn tỉnh trước khi chọn quận/huyện.
                </p>
              </div>
            </div>
          </div>
          <div class="row flex flex-col">
            <label for="desc" class="font-semibold block mr-auto mb-2">
              Mô tả
            </label>
            <textarea
              v-model="desc"
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              class="border border-gray-200"
              placeholder="Huyndai Elantra số tự động đăng kí tháng 06/2018. Xe gia đình mới đẹp, nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách. Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch. Xe trang bị hệ thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống giải trí AV cùng nhiều tiện nghi khác..."
            ></textarea>
            <p v-if="errList.desc && desc === null" class="text-error">
              Nhập một vài dòng mô tả về xe của bạn.
            </p>
          </div>
        </form>
        <div class="vehicle-imgs text-left my-5">
          <label class="text-left font-semibold my-4 block"
            >Danh sách hình ảnh</label
          >
          <div class="flex justify-between">
            <div class="text-center">
              <label for="img-1" class="img-item">
                <input
                  @change="handleFileInput1"
                  id="img-1"
                  type="file"
                  hidden
                />
                <img
                  class="w-full object-cover h-[10rem]"
                  v-if="img_1"
                  :src="img_1"
                  alt=""
                />
              </label>
              <p class="my-3">Ảnh 1: Phía trước xe</p>
            </div>
            <div class="text-center">
              <label for="img-2" class="img-item border cursor-pointer">
                <input
                  @change="handleFileInput2"
                  id="img-2"
                  type="file"
                  hidden
                />
                <img
                  class="w-full object-cover h-[10rem]"
                  v-if="img_2"
                  :src="img_2"
                  alt=""
                />
              </label>
              <p class="my-3">Ảnh 2: Phía sau xe</p>
            </div>
            <div class="text-center">
              <label for="img-3" class="img-item">
                <input
                  @change="handleFileInput3"
                  id="img-3"
                  type="file"
                  hidden
                />
                <img
                  class="w-full object-cover h-[10rem]"
                  v-if="img_3"
                  :src="img_3"
                  alt=""
                />
              </label>
              <p class="my-3">Ảnh 3: Bên trái xe</p>
            </div>

            <div class="text-center">
              <label for="img-4" class="img-item">
                <input
                  @change="handleFileInput4"
                  id="img-4"
                  type="file"
                  hidden
                />
                <img
                  class="w-full object-cover h-[10rem]"
                  v-if="img_4"
                  :src="img_4"
                  alt=""
                />
              </label>
              <p class="my-3">Ảnh 4: Bên phải xe</p>
            </div>
          </div>
          <p v-if="fileErr" class="text-error">
            Chọn đầy đủ hình ảnh theo hướng dẫn.
          </p>
        </div>
        <div class="row mt-3">
          <button
            @click="onSaveVehiCleInfo"
            class="px-4 py-2 w-full bg-primary text-white hover:opacity-70 rounded font-semibold"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center mx-auto">
      <img
        class="mx-auto"
        src="https://www.mioto.vn/static/media/empty-mycar.e023e681.svg"
        alt=""
      />
      <p>Không tìm thấy xe nào</p>
    </div>
  </SectionMain>
</template>
<script setup>
import SectionMain from "@/components/admins/SectionMain.vue";
import SectionTitle from "@/components/admins/SectionTitle.vue";
import { mdiPlus } from "@mdi/js";
// store
import { useAuth } from "@/stores/auth.store";
import { useVehicleInfoStore } from "@/stores/vehicle.store";

import { storeToRefs } from "pinia";
// constants
import { computed, onBeforeMount, ref } from "vue";
import VueBasicAlert from "vue-basic-alert";
import Multiselect from "vue-multiselect";
// firebase
import { uploadVehicleImages } from "@/firebase/uploadImagesVehicle";

// show alert
const notificationStatus = ref(null);
// alert status
const alertStatus = (state = "success", title = "Thông báo", content = "") => {
  notificationStatus.value.showAlert(state, title, content);
};

// handle img preview
let fileErr = ref(false);
let fileList = ref([]);
let img_1 = ref("");
let img_2 = ref("");
let img_3 = ref("");
let img_4 = ref("");

function handleFileInput(inputElement, callback) {
  let input = inputElement.target;
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let isExist = fileList.value.includes(input.files[0].name);
      // fileList.value.forEach((element) => {
      //   console.log(element.name);
      // });
      if (!isExist) {
        callback(e.target.result, input.files[0]);
      } else {
        alertStatus("error", "Lỗi !!!", "Vui lòng chọn ảnh khác.");
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function handleFileInput1(e) {
  handleFileInput(e, (url, file) => {
    img_1.value = url;
    fileList.value.push(file);
  });
}
function handleFileInput2(e) {
  handleFileInput(e, (url, file) => {
    img_2.value = url;
    fileList.value.push(file);
  });
}
function handleFileInput3(e) {
  handleFileInput(e, (url, file) => {
    img_3.value = url;
    fileList.value.push(file);
  });
}
function handleFileInput4(e) {
  handleFileInput(e, (url, file) => {
    img_4.value = url;
    fileList.value.push(file);
  });
}

// Store
const vehicleInfo = useVehicleInfoStore();
const authStore = useAuth();
const { userLoggedIn } = storeToRefs(authStore);
// call API
const { gearboxes, brands, fuels, provinces, districts, car_types, carInfor } =
  storeToRefs(vehicleInfo);
onBeforeMount(async () => {
  await vehicleInfo.getGearboxes();
  await vehicleInfo.getType();
  await vehicleInfo.getBrands();
  await vehicleInfo.getFuels();
  await vehicleInfo.getProvinces();
});

const districtsVal = computed(() => {
  return districts.value.length > 0
    ? districts.value
    : [{ district_id: 1, district_name: "Chọn Tỉnh/thành" }];
});

const carName = ref(null);
const hirePrice = ref(null);
const numberPlate = ref(null);
const desc = ref(null);
// brand
const selectedBrand = ref(null);
const carBrand = ref(null);
const getBrand = (brand) => {
  if (brand) {
    carBrand.value = brand.label;
    errList.value.brand = false;
  }
};

// car type
const selectedType = ref(null);
const carType = ref(null);
const getType = (type) => {
  if (type) {
    carType.value = type.label;
    errList.value.carType = false;
  }
};

// gearboxes
const selectedGearbox = ref(null);
const gearBox = ref(null);
const getGearbox = (gearbox) => {
  if (gearbox) {
    gearBox.value = gearbox.label;
    errList.value.gearbox = false;
  }
};

// fuels
const selectedFuel = ref(null);
const fuel = ref(null);
const getFuel = (f) => {
  if (f) {
    fuel.value = f.label;
    errList.value.fuel = false;
  }
};

// Physical Damage Coverage => PDC
const PDC_state = ref(0);
const PDC_brand = ref(null);
const PDC_fee = ref(null);
// average fuel
const avgFuel = ref(0);

// features
const selectedFeature = ref([]);
const features = vehicleInfo.features;
if (selectedFeature.value.length != 0) {
  errList.value.selectedFeature = false;
}

// deposit
const deposits = vehicleInfo.deposit;
const selectedDeposit = ref(null);
const deposit = ref(null);
const getDeposit = (de) => {
  if (de) {
    deposit.value = de.label;
    errList.value.deposit = false;
  }
};

// detail address
const addressDetail = ref(null);

// district
const selectedDistrict = ref(null);
const district = ref(null);
const getDistrict = (dist) => {
  district.value = dist.district_name;
};

// province
const selectedProvince = ref(null);
const prov = ref(null);
const getProvince = async (province) => {
  prov.value = province;
  await vehicleInfo.getDistricts(province.prov_id);
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
const yearManuf = ref(null);
const getYear = (year) => {
  yearManuf.value = year.label;
};

const errList = ref({
  carName: false,
  hirePrice: false,
  numberPlate: false,
  brand: false,
  carType: false,
  gearbox: false,
  fuel: false,
  physicalDamageCoverageState: false,
  physicalDamageCoverageFee: false,
  physicalDamageCoverageBrand: false,
  features: false,
  state: false,
  desc: false,
  deposit: false,
  averageFuel: false,
  prov: false,
  prov_id: false,
  district: false,
  addressDetail: false,
  year: false,
});

async function onSaveVehiCleInfo() {
  let isValid = true;
  carInfor.value.uid =
    userLoggedIn.value && userLoggedIn.value.uid
      ? userLoggedIn.value.uid
      : null;
  carInfor.value.carName = carName.value;
  carInfor.value.hirePrice = hirePrice.value;
  carInfor.value.numberPlate = numberPlate.value;
  carInfor.value.brand = carBrand.value;
  carInfor.value.carType = carType.value;
  carInfor.value.gearbox = gearBox.value;
  carInfor.value.fuel = fuel.value;
  carInfor.value.physicalDamageCoverageState = PDC_state.value;
  carInfor.value.physicalDamageCoverageFee = PDC_fee.value || null;
  carInfor.value.physicalDamageCoverageBrand = PDC_brand.value || 0;
  carInfor.value.features = selectedFeature.value;
  carInfor.value.state = "Chờ duyệt";
  carInfor.value.desc = desc.value;
  carInfor.value.deposit = deposit.value;
  carInfor.value.averageFuel = avgFuel.value;
  carInfor.value.prov = prov.value ? prov.value.prov_name : null;
  carInfor.value.prov_id = prov.value ? prov.value.prov_id : null;
  carInfor.value.district = district.value;
  carInfor.value.addressDetail = addressDetail.value;
  carInfor.value.year = yearManuf.value;

  // check img list
  if (fileList.value.length < 4) fileErr.value = true;
  // show error
  for (const key in carInfor.value) {
    if (
      key === "physicalDamageCoverageState" &&
      carInfor.value["physicalDamageCoverageState"] === 0
    ) {
      // physicalDamageCoverageFee
      // physicalDamageCoverageBrand
      errList.value["physicalDamageCoverageFee"] = false;
      errList.value["physicalDamageCoverageBrand"] = false;
    } else if (key === "imgs") {
      errList.value["imgs"] = false;
    } else {
      if (carInfor.value[key] === null || carInfor.value[key].length <= 0) {
        errList.value[key] = true;
      }
    }
  }
  // check valid
  for (const key in errList.value) {
    if (
      key === "physicalDamageCoverageState" &&
      errList.value["physicalDamageCoverageState"] === 0
    ) {
      errList.value["physicalDamageCoverageFee"] = false;
      errList.value["physicalDamageCoverageBrand"] = false;
    }
    if (errList.value[key]) {
      isValid = false;
    } else {
      isValid = true;
    }
  }
  if (isValid) {
    let uploadStatus = await uploadVehicleImages(
      fileList.value,
      carInfor.value.numberPlate
    );
    if (uploadStatus.error) {
      notificationStatus.value.showAlert(
        "error",
        "Lỗi !",
        uploadStatus.message
      );
    } else {
      await vehicleInfo.registerVehicle(carInfor.value);
    }
  } else {
    notificationStatus.value.showAlert(
      "error",
      "Lỗi !",
      "Vui lòng kiểm tra lại thông tin."
    );
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss" scoped>
input[type="range"] {
  accent-color: #5fcf86;
}
.error {
  @apply border-b-red-500;
}
.text-error {
  @apply text-left text-fz-16 my-2 text-red-500;
}
.img-item {
  @apply border cursor-pointer min-h-[10rem] w-40;
  display: block;
  background: rgba(161, 161, 161, 0.5);
  background-image: url(https://www.mioto.vn/static/media/camera.0ef15ed5.svg);
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-position: 50%;
}
</style>
