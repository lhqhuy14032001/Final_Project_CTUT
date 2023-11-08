import { ref } from "vue";
import { defineStore } from "pinia";
import { handleCheckSeesstion } from "@/ultils/functions";
import { useRouter } from "vue-router";
// axios
import userAPI from "@/apis/AdminAPI/user.api";

export const useUser = defineStore("userStore", () => {
  const router = useRouter();
  let userList = ref([]);
  let userFilter = ref([]);
  let isShowAlert = ref(false);
  let page = ref(1);
  let isShowViewMore = ref(false);
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
      if (error.response.data.message.code === 403) {
        handleCheckSeesstion(router, { name: "admin-login", params: {} });
      }
      console.error("Error fetch user list::::", error);
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
      if (error.response.data.message.code === 403) {
        handleCheckSeesstion(router, { name: "admin-login", params: {} });
      }
      console.error("Error fetch user list::::", error);
    }
  }
  async function deleteUser(user) {
    try {
      let response = await userAPI.deleteUser(user);
      if (response.status === 200) {
        await getUserList();
      }
    } catch (error) {
      if (error.response.data.message.code === 403) {
        handleCheckSeesstion(router, { name: "admin-login", params: {} });
      }
      console.error(error);
    }
  }
  return {
    userList,
    userFilter,
    isShowAlert,
    page,
    isShowViewMore,
    getUserByRole,
    getUserList,
    getUserListViewMore,
    deleteUser,
  };
});
