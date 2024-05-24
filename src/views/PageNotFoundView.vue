<template>
  <div class="page-not-found-view">
    <div class="page-not-found-title">Not found</div>
    <div class="page-not-found-label">Oops we couldn't find that page.</div>
    <BaseButton
      class="page-not-found-button"
      @click="() => $router.push({ path: '/' })"
      >Back to home</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.page-not-found {
  &-view {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 40px 0px 40px;
    padding: 80px 204px;
    border-radius: 20px;
    gap: 40px;

    @media screen and (max-width: $small-screen) {
      padding: 40px 16px;
      border-radius: 0px;
      height: 100%;
      margin: 0px;
    }
  }

  &-title {
    font-size: 68px;
    line-height: 72px;
  }

  &-label {
    font-size: 24px;
  }

  &-button {
    width: max-content;
  }
}
</style>
