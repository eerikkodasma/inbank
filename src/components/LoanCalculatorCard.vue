<template>
  <div class="calculator-container">
    <div class="calculator-heading">
      <div class="calculator-title">Calculate your monthly payment</div>
      <div class="calculator-text">
        Estimate your monthly payments based on the chosen loan amount and time
        period.
      </div>
    </div>
    <div class="calculator-divider"></div>
    <LoanCalculator />
  </div>
</template>

<script setup lang="ts">
import LoanCalculator from "../components/LoanCalculator.vue";
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.calculator {
  &-container {
    display: flex;
    background-color: #e6d4f1;
    padding: 80px 40px 80px 40px;
    gap: 40px;

    @media screen and (max-width: $small-screen) {
      flex-direction: column;
      padding: 40px 16px 40px 16px;
    }
  }

  &-divider {
    /* Last 2 digit is opacity */
    border: 1px solid #21093a15;
  }

  &-heading {
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    flex: 1;
    gap: 16px;

    @media screen and (max-width: $small-screen) {
      padding: 0px;
      gap: 8px;
    }
  }

  &-title {
    font-family: Bitter;
    font-size: 68px;
    font-weight: 400;
    line-height: 72px;
    margin: 0px;

    @media screen and (max-width: $small-screen) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  &-text {
    opacity: 90%;
  }
}
</style>
