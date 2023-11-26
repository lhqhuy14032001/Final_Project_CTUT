import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "@/configs/init.firebase";
export const downloadFile = async () => {
  const storeage = getStorage(firebaseApp);
  const fileRef = ref(
    storeage,
    "contract/Hop-dong-cho-thue-xe-tu-lai-v4-10-06.docx"
  );
  const downloadURL = await getDownloadURL(fileRef);
  // console.log(downloadURL);
  return downloadURL;
};
