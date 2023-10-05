import { defineStore } from "pinia";
import { ref } from "vue";
export const useVehicleInfoStore = defineStore("VehicelInfo", () => {
  const totalVehicle = ref(8000);
  const carInfor = ref({
    uid: null,
    carName: null,
    hirePrice: null,
    numberPlate: null,
    brand_id: null,
    carType_id: null,
    gearbox_id: null,
    fuel_id: null,
    physicalDamageCoverageState: false,
    physicalDamageCoverageFee: null,
    physicalDamageCoverageBrand: null,
    features_id: [],
    state: "Trống",
    policy: null,
    desc: null,
    deposit: null,
    averageFuel: null,
    address: {
      prov_id: null,
      district_id: null,
      addressDetail: null,
    },
  });
  const surcharge = ref([
    {
      id: 1,
      label: "Phụ phí vượt giới hạn hạn",
      desc: "Phụ phí phát sinh nếu lộ trình di chuyển vượt quá 350km khi thuê xe 1 ngày",
      charge: 0,
      unit: "đ/km",
    },
    {
      id: 2,
      label: "Phụ phí quá giờ",
      desc: "Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê",
      charge: 0,
      unit: "đ/h",
    },
    {
      id: 1,
      label: "Phụ phí khử mùi",
      desc: "Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi thuốc lá, thực phẩm nặng mùi...)",
      charge: 0,
      unit: "đ",
    },
  ]);
  const deposit = ref([
    { value: 0, label: "Không thế chấp" },
    { value: 1, label: "Tiền mặt" },
    { value: 2, label: "Xe máy chính chủ" },
    { value: 3, label: "Tất cả" },
  ]);
  const gearboxes = ref([
    { gearbox_id: 1, label: "Số sàn" },
    { gearbox_id: 2, label: "Số số tự động" },
    { gearbox_id: 3, label: "Tất cả" },
  ]);
  const car_types = ref([
    { type_id: 1, label: "4 chỗ mini (Hạng A)" },
    { type_id: 2, label: "4 chỗ Sedan" },
    { type_id: 3, label: "4 chỗ Hatchback" },
    { type_id: 4, label: "4 chỗ gầm cao" },
    { type_id: 5, label: "7 chỗ gầm cao" },
    { type_id: 6, label: "7 chỗ gầm gầm thấp" },
    { type_id: 7, label: "Bán tải" },
  ]);
  const fuels = ref([
    { fuel_id: 1, label: "Xăng" },
    { fuel_id: 2, label: "Diesel" },
    { fuel_id: 3, label: "Điện" },
    { fuel_id: 4, label: "Tất cả" },
  ]);
  const brands = ref([
    { brand_id: 1, label: "Toyota" },
    { brand_id: 2, label: "Hyundai" },
    { brand_id: 3, label: "KIA" },
    { brand_id: 4, label: "Mitsubishi" },
    { brand_id: 5, label: "Vinfast" },
  ]);
  const features = ref([
    {
      feature_id: 1,
      label: "Bản đồ",
    },
    {
      feature_id: 2,
      label: "Bluetooth",
    },
    {
      feature_id: 3,
      label: "Camera 360",
    },
    {
      feature_id: 4,
      label: "Camera cập lề",
    },
  ]);
  const provinces = ref([
    { prov_id: 1, prov_name: "An Giang" },
    { prov_id: 2, prov_name: "Hậu Giang" },
    { prov_id: 3, prov_name: "Kiên Giang" },
    { prov_id: 4, prov_name: "Cần Thơ" },
    { prov_id: 5, prov_name: "Cà Mau" },
    { prov_id: 6, prov_name: "Bạc Liêu" },
    { prov_id: 7, prov_name: "Sóc Trăng" },
    { prov_id: 8, prov_name: "Trà Vinh" },
    { prov_id: 9, prov_name: "Bến Tre" },
  ]);
  const districts = ref([
    { district_id: 1, prov_id: 1, district_name: "Châu Thành" },
    { district_id: 2, prov_id: 1, district_name: "Châu Phú" },
    { district_id: 3, prov_id: 1, district_name: "TP.Long Xuyên" },
    { district_id: 4, prov_id: 1, district_name: "TP.Châu Đốc" },
    { district_id: 5, prov_id: 1, district_name: "Thoại Sơn" },
  ]);

  return {
    totalVehicle,
    carInfor,
    surcharge,
    deposit,
    gearboxes,
    car_types,
    fuels,
    brands,
    features,
    provinces,
    districts,
  };
});
