<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
import { useUserStore } from "../stores/user";
const countStore = useCounterStore();
const userData = ref({
  username: "",
  pwd: "",
});
const userStore = useUserStore();
const onLogin = async () => {
  await userStore.login(userData);
};
const onLogout = async () => {
  await userStore.logout();
};
</script>
<template>
  <div class="about">
    <template v-if="userStore.token">
      {{ userStore.token }}
      {{ userStore.username }}
    </template>
    <!-- <p>Count: {{ countStore.count }}</p>
    <p>Count: {{ countStore.doubleCount }}</p>
    <button @click="countStore.increment()">+1</button> -->
    <input type="text" v-model="userData.username" />
    <input type="password" v-model="userData.pwd" />
    <button @click="onLogin">Login</button>
    <button @click="onLogout">Logout</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
