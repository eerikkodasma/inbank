<template>
  <div class="loan-denied-view">
    <div class="response-title-wrapper">
      <div class="response-title">
        Dear {{ store.userDetails.firstName }} {{ store.userDetails.lastName }}
      </div>
      <div class="response-label">Unfortunately, your loan was denied.</div>
    </div>
    <div class="response-text-wrapper">
      <div class="divider"></div>
      <div class="response-text">
        In addition to your income and expenses, a number of other factors play
        a role in loan decisions.
      </div>
      <div class="divider"></div>
    </div>
    <BaseButton
      @click="
        () => ($router.push({ name: ROUTE_PATHS.HOME }), store.clearState())
      "
      >Exit</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import { ROUTE_PATHS } from "@/router/paths";
import { useUserStore } from "@/stores/userStore";

const store = useUserStore();
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.loan-denied-view {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
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

.response {
  &-text {
    font-family: Inter;
    font-size: 14px;
    line-height: 20px;

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &-title {
    font-family: Bitter;
    font-style: italic;
    font-size: 48px;
    line-height: 56px;

    @media screen and (max-width: $small-screen) {
      font-size: 32px;
      line-height: 36px;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &-label {
    font-family: Inter;
    line-height: 24px;
  }
}
</style>
