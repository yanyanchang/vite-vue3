<script setup lang="ts">
import { useRouter } from "vue-router";

import { useMainStore } from "@/store/main";
const mainStore = useMainStore();
const router = useRouter();
const toLogin = () => {
  router.push({
    name: "Login",
  });
};
const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: "名称被修改了,nameLength也随之改变了",
  });
};
console.log(import.meta.env.VITE_APP_WEB_URL);
</script>

<template>
  {{ mainStore.name }} {{ mainStore.nameLength }}
  <button @click="toLogin">toLogin</button>
  <button @click="updateName">修改store中的name</button>
</template>

<style lang="scss" scoped></style>
