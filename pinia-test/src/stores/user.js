import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    token: "",
  }),
  getters: {
    hello: (state) => "Hello!" + state.username,
  },
  actions: {
    async login(userData) {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userData,
      });
      const json = await res.json();
      const { data, code } = json;
      if (code === 0) {
        this.username = data.username;
        this.token = data.token;
      }
    },
    logout() {
      this.token = "";
      this.username = "";
    },
  },
});
