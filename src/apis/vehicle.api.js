import axiosInstance from "./axios.configs";
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth.store";
const getUID = () => {
  const authStore = useAuth();
  const { userLoggedIn } = storeToRefs(authStore);
  let _uid = userLoggedIn.value.uid;
  return _uid;
};
const getUIDAdmin = () => {
  const authStore = useAuth();
  const { adminLogin } = storeToRefs(authStore);
  let _uid = adminLogin.value.uid;
  return _uid;
};

const vehicleAPI = {
  getType: () => {
    let _uid = getUID();
    let url = "client/types";
    return axiosInstance.post(url, { _uid: _uid });
  },
  getGearboxes: () => {
    let _uid = getUID();
    let url = "client/gearboxes";
    return axiosInstance.post(url, { _uid: _uid });
  },
  getBrands: () => {
    let _uid = getUID();
    let url = "client/brands";
    return axiosInstance.post(url, { _uid: _uid });
  },
  getFuels: () => {
    let _uid = getUID();
    let url = "client/fuels";
    return axiosInstance.post(url, { _uid: _uid });
  },
  getProvinces: () => {
    let _uid = getUID();
    let url = "client/provinces";
    return axiosInstance.post(url, { _uid: _uid });
  },
  getDistricts: (prov_id) => {
    let _uid = getUID();
    let url = "client/districts";
    return axiosInstance.post(url, {
      _uid: _uid,
      prov_id: prov_id,
    });
  },
  registerVehicle: (carInfo) => {
    let url = "client/register-vehicle";
    return axiosInstance.post(url, {
      _uid: getUID(),
      carInfo: carInfo,
    });
  },
  getVehicleWithStatus: (status) => {
    let url = "admin/all-vehicle-status";
    return axiosInstance.post(url, {
      _uid: getUIDAdmin,
      status: status,
    });
  },
};
export default vehicleAPI;
