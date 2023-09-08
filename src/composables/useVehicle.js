import { ref } from "vue";
const useVehicle = () => {
  const gearBox = ref([{ value: "MT", label: "Số sàn" }]);
  return { gearBox };
};
export default useVehicle;
