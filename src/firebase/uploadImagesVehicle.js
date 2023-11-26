import firebaseApp from "@/configs/init.firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// store
import { useAuth } from "@/stores/auth.store";
import { storeToRefs } from "pinia";

const storage = getStorage(firebaseApp);
const imgType = ["image/png", "image/jpg", "image/jpeg"];
export const uploadVehicleImages = async (files, numberPlate) => {
  const authStore = useAuth();
  const { userLoggedIn } = storeToRefs(authStore);
  if (!files) return { error: true, message: "Vui lòng chọn ảnh." };
  files.forEach((file) => {
    let checkType = imgType.includes(file.type);
    if (!checkType) {
      return { error: true, message: "Vui lòng chọn ảnh png, jpg, jepg." };
    }
  });
  let uploadList = [];
  files.forEach((file) => {
    uploadList.push({
      ref: ref(
        storage,
        `vehicle_img/${userLoggedIn.value.uid}/${numberPlate}/${file.name}`
      ),
      file: file,
    });
  });
  try {
    let urls = [];
    uploadList.forEach(async (element) => {
      await uploadBytes(element.ref, element.file);
      urls.push(await getDownloadURL(element.ref));
    });
    return { error: false, data: { urlsVehicle: urls } };
  } catch (error) {
    console.error("Error from firebase upload", error);
    return { error: true, data: null };
  }
};
