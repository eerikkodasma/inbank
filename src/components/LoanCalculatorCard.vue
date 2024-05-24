<template>
  <div class="calculator-container">
    <div class="calculator-heading">
      <div class="calculator-title">Calculate your monthly payment</div>
      <div class="calculator-text">
        Estimate your monthly payments based on the chosen loan amount and time
        period.
      </div>
    </div>
    <div v-if="!isMobile" class="divider"></div>
    <LoanCalculator />
  </div>
</template>

<script setup lang="ts">
import LoanCalculator from "@/components/LoanCalculator.vue";
import { ref } from "vue";

const isMobile = ref(window.innerWidth <= 700);
window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth <= 700;
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.calculator {
  &-container {
    display: flex;
    background-color: #e3d2ff;
    padding: 80px 40px 80px 40px;
    gap: 40px;

    @media screen and (max-width: $small-screen) {
      flex-direction: column;
      padding: 40px 16px 40px 16px;
    }
  }

  &-heading {
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    flex: 1;
    gap: 16px;

    @media screen and (max-width: $small-screen) {
      gap: 8px;
      text-align: left;
    }
  }

  &-title {
    font-family: Bitter;
    font-size: 68px;
    line-height: 72px;
    margin: 0px;

    @media screen and (max-width: $small-screen) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  &-text {
    font-family: Inter;
    opacity: 90%;
    line-height: 24px;
  }
}
</style>
