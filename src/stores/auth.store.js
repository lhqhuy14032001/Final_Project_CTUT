import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { ref } from "vue";
import authAPI from "@/apis/auth.api";
import { PERMISSION } from "@/ultils/constants";

export const useAuth = defineStore(
  "authStore",
  () => {
    const router = useRouter();
    let signUpError = ref(null);
    let signInError = ref(null);
    let isLoggedIn = ref(false);
    let expiredSession = ref(null);
    let userLoggedIn = ref(null);
    let adminLogin = ref(null);
    // getters

    // action to call API
    async function signUp(user) {
      try {
        let data = await authAPI.signUp(user);
        document.cookie = `_us=${JSON.stringify(data.metadata.user)}`;
        signUpError.value = null;
        isLoggedIn.value = !isLoggedIn.value;
        userLoggedIn.value = data.metadata.user;
      } catch (error) {
        console.error(error);
        throw error.response.data.message;
      }
    }
    async function signIn(user) {
      try {
        let data = await authAPI.signIn(user);
        if (data.metadata.user.role === PERMISSION.AD) {
          adminLogin.value = data.metadata.user;
          router.push({ name: "home-admin", params: {} });
        } else {
          document.cookie = `_us=${JSON.stringify(data.metadata.user)}`;
          isLoggedIn.value = !isLoggedIn.value;
          userLoggedIn.value = data.metadata.user;
        }
        return { errMessage: null, data: {} };
      } catch (error) {
        console.error("Something went wrong::::", error.response.data.message);
        return {
          errMessage: error.response.data.message,
          data: null,
        };
      }
    }
    async function signOut() {
      try {
        let _uid;
        if (userLoggedIn.value) {
          _uid = userLoggedIn.value.uid;
        }
        console.log(_uid);
        let res = await authAPI.signOut(_uid, PERMISSION.CUS);
        if (res.status === 200) {
          if (userLoggedIn.value) {
            isLoggedIn.value = !isLoggedIn.value;
            userLoggedIn.value = null;
            router.push({ name: "home", params: {} });
          }
        }
      } catch (error) {
        if (error.response.data.message.code === 403) {
          if (userLoggedIn.value) {
            isLoggedIn.value = false;
            userLoggedIn.value = null;
            router.push({ name: "home", params: {} });
          }
          // expiredSession.value = error.message;
        } else {
          console.error(error);
        }
      }
    }
    async function signOutAD() {
      try {
        let _uid;
        if (adminLogin.value) {
          _uid = adminLogin.value.uid;
        }
        let res = await authAPI.signOut(_uid, PERMISSION.AD);
        if (res.status === 200) {
          adminLogin.value = null;
          router.push({ name: "admin-login", params: {} });
        }
      } catch (error) {
        if (error.response.data.message.code === 403) {
          adminLogin.value = null;
          router.push({ name: "admin-login", params: {} });
          // expiredSession.value = error.message;
        } else {
          console.error(error);
        }
      }
    }
    // google auth
    async function signupWithGoogle(accessToken) {
      try {
        let data = await authAPI.signupWithGoogle(accessToken);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    return {
      signInError,
      isLoggedIn,
      userLoggedIn,
      adminLogin,
      expiredSession,
      signUp,
      signIn,
      signOut,
      signOutAD,
      signupWithGoogle,
    };
  },
  {
    persist: true,
  }
);
