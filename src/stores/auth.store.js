import { defineStore } from "pinia";
import { ref } from "vue";
import authAPI from "@/apis/auth.api";
export const useAuth = defineStore(
  "authStore",
  () => {
    let isLoggedIn = ref(false);
    let signUpInfo = ref({});
    let signUpError = ref(null);
    // action to call API
    async function signUp(user) {
      try {
        let res = await authAPI.signUp(user);
        isLoggedIn.value = !isLoggedIn.value;
        signUpInfo.value = res.metadata;
        signUpError.value = null;
      } catch (error) {
        console.error(error.response.data.message);
        signUpError.value = error.response.data.message;
      }
    }
    async function signOut(_uid) {
      try {
        let res = await authAPI.signOut(_uid);
        isLoggedIn.value = !isLoggedIn.value;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    return {
      isLoggedIn,
      signUpInfo,
      signUpError,
      signUp,
      signOut,
    };
  },
  {
    persist: true,
  }
);
