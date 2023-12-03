import vehicleAPI from "@/apis/vehicle.api";
import { vehicleStatus } from "@/ultils/constants";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "./auth.store";

export const useVehicleInfoStore = defineStore("VehicelInfo", () => {
  const authStore = useAuth();
  const router = useRouter();
  const { userLoggedIn, isLoggedIn, adminLogin } = storeToRefs(authStore);
  const totalVehicle = ref(8000);
  const locationFamous = ref([
    {
      id: 1,
      prov_name: "Hồ Chí Minh",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HoChiMinh_v2.jpg",
    },
    {
      id: 2,
      prov_name: "Hà Nội",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HaNoi_v2.jpg",
    },
    {
      id: 3,
      prov_name: "Đà Nẵng",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/DaNang_v2.jpg",
    },
    {
      id: 4,
      prov_name: "Cần Thơ",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/CanTho_v2.jpg",
    },
    {
      id: 5,
      prov_name: "Đà Lạt",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/DaLat_v2.jpg",
    },

    {
      id: 6,
      prov_name: "Nha Trang",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/NhaTrang_v2.jpg",
    },
    {
      id: 8,
      prov_name: "Quy Nhơn",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/QuyNhon_v2.jpg",
    },
    {
      id: 9,
      prov_name: "Phú Quốc",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/PhuQuoc_v2.jpg",
    },
    {
      id: 10,
      prov_name: "Hải Phòng",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HaiPhong_v2.jpg",
    },
    {
      id: 11,
      prov_name: "Vũng Tàu",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/VungTau_v2.jpg",
    },
    {
      id: 12,
      prov_name: "Bình Dương",
      totalVehicle: 300,
      cityImg:
        "https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/BinhDuong_v2.jpg",
    },
  ]);
  const searchInfo = ref({
    startDate: null,
    endDate: null,
    location: null,
  });
  const vehicleWaitToConfirm = ref([]);
  const hirePrice = ref(900000);
  const serviceFee = hirePrice.value * 0.01;
  const PDCfee = hirePrice.value * 0.01;
  const carInfor = ref({
    uid: null,
    carName: null,
    hirePrice: null,
    numberPlate: null,
    brand: null,
    carType: null,
    gearbox: null,
    fuel: null,
    year: null,
    physicalDamageCoverageState: 0,
    physicalDamageCoverageFee: null,
    physicalDamageCoverageBrand: null,
    features: [],
    state: vehicleStatus.CD,
    desc: null,
    deposit: null,
    averageFuel: null,
    prov: null,
    prov_id: null,
    district: null,
    addressDetail: null,
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
  const provSearch = ref([]);
  const districtSearch = ref([]);
  const gearboxes = ref(new Array());
  const car_types = ref([]);
  const fuels = ref([]);
  const brands = ref([]);
  const features = ref([
    {
      feature_id: 1,
      label: "Bản đồ",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/map-v2.png",
    },
    {
      feature_id: 2,
      label: "Bluetooth",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth-v2.png",
    },
    {
      feature_id: 3,
      label: "Camera 360",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/360_camera-v2.png",
    },
    {
      feature_id: 4,
      label: "Camera cập lề",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/parking_camera-v2.png",
    },
    {
      feature_id: 5,
      label: "Camera hành trình",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera-v2.png",
    },
    {
      feature_id: 6,
      label: "Camera lùi",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera-v2.png",
    },
    {
      feature_id: 7,
      label: "Cảm biến va chạm",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/impact_sensor-v2.png",
    },
    {
      feature_id: 8,
      label: "Cảnh báo tốc độ",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up-v2.png",
    },
    {
      feature_id: 9,
      label: "Định vị GPS",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps-v2.png",
    },
    {
      feature_id: 10,
      label: "Khe cắm USB",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb-v2.png",
    },
    {
      feature_id: 11,
      label: "Lốp dự phòng",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire-v2.png",
    },
    {
      feature_id: 12,
      label: "Màn hình DVD",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd-v2.png",
    },
    {
      feature_id: 13,
      label: "ETC",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc-v2.png",
    },
    {
      feature_id: 14,
      label: "Túi khí an toàn",
      img: "https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags-v2.png",
    },
  ]);
  const provinces = ref([]);
  const districts = ref([]);
  // vehicle to show for client
  const vehicleChecked = ref([]);
  // call API to get vehicle info
  async function getType() {
    try {
      let response = await vehicleAPI.getType();
      if (response.status === 200) {
        car_types.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }
  async function getGearboxes() {
    try {
      let response = await vehicleAPI.getGearboxes();
      if (response.status === 200) {
        gearboxes.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }
  async function getBrands() {
    try {
      let response = await vehicleAPI.getBrands();
      if (response.status === 200) {
        brands.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }
  async function getFuels() {
    try {
      let response = await vehicleAPI.getFuels();
      if (response.status === 200) {
        fuels.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }
  async function getProvinces() {
    try {
      let response = await vehicleAPI.getProvinces();
      if (response.status === 200) {
        provinces.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
        console.error(error);
      }
    }
  }
  async function getDistricts(prov_id) {
    try {
      let response = await vehicleAPI.getDistricts(prov_id);
      if (response.status === 200) {
        districts.value = response.metadata;
      } else {
        districts.value = [];
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }

  async function registerVehicle(carInfo) {
    let res = {};
    try {
      let result = await vehicleAPI.registerVehicle(carInfo);
      if (result.status === 200) {
        res.err = false;
        res.message = "Đăng ký thông tin xe thành công.";
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      } else {
        res.err = true;
        res.message = "Có lỗi xảy ra!";
        console.error(error);
      }
    }
    return res;
  }
  async function getVehicleWithStatus(status) {
    try {
      let result = await vehicleAPI.getVehicleWithStatus(status);
      if (result.metadata.length > 0) {
        vehicleWaitToConfirm.value = result.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (adminLogin.value) {
          adminLogin.value = null;
          router.push({ name: "admin-login", params: {} });
        }
      } else {
        console.error(error);
      }
    }
  }
  async function getVehicleChecked(status) {
    try {
      let result = await vehicleAPI.getVehicleWithStatusChecked(status);
      if (result.metadata.length !== 0) {
        vehicleChecked.value = result.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (adminLogin.value) {
          adminLogin.value = null;
          router.push({ name: "home", params: {} });
        }
      } else {
        console.error(error);
      }
    }
  }
  async function handleAcceptVehicle(vehicleInfo) {
    let res = {};
    try {
      let result = await vehicleAPI.handleAcceptVehicle(vehicleInfo);
      if (result.status === 200) {
        res.err = false;
        // await vehicleAPI.getVehicleWithStatus(vehicleStatus.CD);
        router.push({ name: "car-manage", params: {} });
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (adminLogin.value) {
          adminLogin.value = null;
          router.push({ name: "admin-login", params: {} });
        }
      } else {
        res.err = true;
        res.message = "Có lỗi xảy ra! Vui lòng thử lại.";
        console.error(error);
      }
    }
    return res;
  }
  async function handleRejectVehicle(vehicleInfo, reason) {
    let res = {};
    try {
      let result = await vehicleAPI.handleRejectVehicle(vehicleInfo, reason);
      if (result.status === 200) {
        res.err = false;
        // await vehicleAPI.getVehicleWithStatus(vehicleStatus.CD);
        router.push({ name: "car-manage", params: {} });
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (adminLogin.value) {
          adminLogin.value = null;
          router.push({ name: "admin-login", params: {} });
        }
      } else {
        res.err = true;
        res.message = "Có lỗi xảy ra! Vui lòng thử lại.";
        console.error(error);
      }
    }
    return res;
  }
  // filter
  async function getProvincesSearch() {
    try {
      let response = await vehicleAPI.getProvSearch();
      if (response.status === 200) {
        provSearch.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
        console.error(error);
      }
    }
  }
  async function getDistrictsSearch(prov_id) {
    try {
      let response = await vehicleAPI.getDistrictSearch(prov_id);
      if (response.status === 200) {
        districtSearch.value = response.metadata;
      } else {
        districts.value = [];
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        if (userLoggedIn.value) {
          isLoggedIn.value = false;
          userLoggedIn.value = null;
          router.push({ name: "home", params: {} });
        }
      }
      console.error(error);
    }
  }

  return {
    totalVehicle,
    searchInfo,
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
    locationFamous,
    hirePrice,
    serviceFee,
    PDCfee,
    vehicleWaitToConfirm,
    vehicleChecked,
    provSearch,
    districtSearch,
    getType,
    getGearboxes,
    getBrands,
    getFuels,
    getProvinces,
    getDistricts,
    registerVehicle,
    getVehicleWithStatus,
    getVehicleChecked,
    handleAcceptVehicle,
    handleRejectVehicle,
    getProvincesSearch,
    getDistrictsSearch,
  };
});
