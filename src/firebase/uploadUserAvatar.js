import firebaseApp from "@/configs/init.firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// store
import { useAuth } from "@/stores/auth.store";
import { storeToRefs } from "pinia";
// ultils
import { removeOldAvatar } from "./ultils";

const storage = getStorage(firebaseApp);
const imgType = ["image/png", "image/jpg", "image/jpeg"];

export const uploadAvatar = async (file) => {
  const authStore = useAuth();
  const { userLoggedIn } = storeToRefs(authStore);
  if (!file) return { error: true, message: "Vui lòng chọn ảnh." };
  let checkType = imgType.includes(file.type);
  if (!checkType)
    return { error: true, message: "Vui lòng chọn ảnh png, jpg, jepg." };
  let errStatus = await removeOldAvatar(userLoggedIn.value.uid);
  if (errStatus) {
    return { error: true, message: "Có lỗi xảy ra vui lòng thử lại" };
  } else {
    let refAvatar = ref(
      storage,
      `avatar_user/${userLoggedIn.value.uid}/${file.name}`
    );
    try {
      await uploadBytes(refAvatar, file);
      let url = await getDownloadURL(refAvatar);
      return { error: false, data: { urlAvatar: url } };
    } catch (error) {
      console.error("Error from firebase upload", error);
      return { error: true, data: null };
    }
  }
};
