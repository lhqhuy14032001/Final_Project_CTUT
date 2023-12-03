import firebaseApp from "@/configs/init.firebase";
import { getStorage, listAll, ref, deleteObject } from "firebase/storage";
const storage = getStorage(firebaseApp);
export const removeOldAvatar = async (uid) => {
  const listRef = ref(storage, `avatar_user/${uid}`);
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      if (res.items.length === 0) return false;
      if (res.items.length !== 0) {
        res.items.forEach((item) => {
          const fileRef = ref(storage, item._location.path_);
          deleteObject(fileRef)
            .then(() => {
              return false;
            })
            .catch((error) => {
              console.error(error);
              return true;
            });
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const removeVehicleImg = async (uid, numberPlate) => {
  const listRef = ref(storage, `/vehicle_img/${uid}/${numberPlate}`);
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      if (res.items.length === 0) return false;
      if (res.items.length !== 0) {
        res.items.forEach((item) => {
          const fileRef = ref(storage, item._location.path_);
          deleteObject(fileRef)
            .then(() => {
              return false;
            })
            .catch((error) => {
              console.error(error);
              return true;
            });
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
