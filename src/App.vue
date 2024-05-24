<template>
  <NavBar />
  <div class="page">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped lang="scss">
.page {
  height: 100%;
}
</style>
