import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { handleCheckSession } from "@/ultils/functions";
import { useRouter } from "vue-router";
// store
import { useAuth } from "./auth.store";
// axios
import userAPI from "@/apis/user.api";
import emailAPI from "@/apis/email.api";

export const useUser = defineStore("userStore", () => {
  const router = useRouter();
  const authStore = useAuth();
  const { userLoggedIn } = storeToRefs(authStore);
  let totalUsers = ref(0);
  let userList = ref([]);
  let userFilter = ref([]);
  let isShowAlert = ref(false);
  let page = ref(1);
  let isShowViewMore = ref(false);
  // read
  async function getUserByRole(role) {
    userFilter.value = [];
    userFilter.value = userList.value.filter((user) => {
      return user.role === role.code;
    });
    if (role.code === "ALL") {
      await this.getUserList();
      isShowViewMore.value = false;
    }
    if (userFilter.value.length === 0 && role.code !== "ALL") {
      isShowAlert.value = true;
    }
  }
  async function getUserList() {
    try {
      let response = await userAPI.getUserList();
      if (response.status === 200) {
        userList.value = response.metadata;
        if (response.metadata.length < 10) {
          isShowViewMore.value = true;
        }
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "admin-login", params: {} });
      }
      console.error("Error fetch user list::::", error);
    }
  }
  async function getTotalUsers() {
    try {
      let response = await userAPI.getTotalUsers();
      if (response.status === 200) {
        totalUsers.value = response.metadata;
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "admin-login", params: {} });
      }
      console.error("Error fetch total users::::", error);
    }
  }
  async function getUserListViewMore() {
    try {
      page.value = page.value + 1;
      let response = await userAPI.getUserListViewMore(page.value);
      if (response.status === 200) {
        if (response.metadata.length < 10) {
          isShowViewMore.value = !isShowViewMore.value;
        }
        response.metadata.forEach((user) => {
          userList.value.push(user);
        });
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "admin-login", params: {} });
      }
      console.error("Error fetch user list::::", error);
    }
  }
  // delete
  async function deleteUser(user) {
    try {
      let response = await userAPI.deleteUser(user);
      if (response.status === 200) {
        await getUserList();
      }
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "admin-login", params: {} });
      }
      console.error(error);
    }
  }
  // update
  async function updateAvatar(url) {
    try {
      await userAPI.updateAvatar(url);
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "admin-login", params: {} });
      }
      console.error(error);
      throw "Cập nhật ảnh đại diện không thành công.";
    }
  }
  async function updateRole(email = null) {
    try {
      let res = await userAPI.updateRole(email);
      if (res.status === 200) {
        userLoggedIn.value = res.metadata;
      }
      return { errMesssage: false };
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "home", params: {} });
      }
      console.error(error);
      return { errMesssage: true };
    }
  }

  // email
  async function verifyEmail(user) {
    try {
      await emailAPI.sendVerifyEmail(user);
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "home", params: {} });
      }
      console.error(error);
    }
  }
  async function onUpdateStatusEmail(email) {
    try {
      let res = await emailAPI.updateEmailState(email);
      userLoggedIn.value = res.metadata;
    } catch (error) {
      if (error?.response?.data?.message?.code === 403) {
        handleCheckSession(router, { name: "home", params: {} });
      }
      console.error(error);
    }
  }
  return {
    userList,
    userFilter,
    totalUsers,
    isShowAlert,
    page,
    isShowViewMore,
    getUserByRole,
    getUserList,
    getTotalUsers,
    getUserListViewMore,
    deleteUser,
    updateAvatar,
    updateRole,
    verifyEmail,
    onUpdateStatusEmail,
  };
});
