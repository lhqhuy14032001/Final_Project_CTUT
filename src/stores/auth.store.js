import { defineStore } from "pinia";
export const useAuth = defineStore("authStore", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    onChangeStateIsLoggedIn(newState) {
      this.isLoggedIn = newState;
    },
  },
});
