<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
  router.push({
    name: "Home",
  });
};
</script>

<template><button @click="toHome">toHome</button></template>

<style lang="scss" scoped></style>
