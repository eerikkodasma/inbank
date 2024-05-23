<template>
  <div class="loan-view">
    <div class="image-wrapper">
      <img src="@/assets/images/SmallLoan.png" />
    </div>
    <div class="summary-wrapper">
      <div class="summary">
        <div class="summary-title-wrapper">
          <div class="summary-title">Good news!</div>
          <div class="summary-text">Your loan has been approved.</div>
        </div>
        <table class="summary-table">
          <tr>
            <td>
              <div class="summary-table-data">Loan amount</div>
              <div class="summary-table-data">{{ store.amount }} €</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="summary-table-data">Loan period</div>
              <div class="summary-table-data">{{ store.period }} months</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="summary-table-data">Monthly payment</div>
              <div class="summary-table-data">{{ store.monthlyPayment }} €</div>
            </td>
          </tr>
        </table>
      </div>
      <BaseButton class="summary-button">Back to home page</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseComponents/BaseButton.vue";
import { useUserStore } from "../stores/userStore";
const store = useUserStore();
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.loan {
  &-view {
    display: flex;
    background-color: #ffffff;
    margin: 16px 40px 0px 40px;
    border-radius: 20px;
  }
}

.summary {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 40px;
  width: 100%;

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 108px 40px 108px;
    gap: 40px;
    flex-grow: 1;
    box-sizing: border-box;
    width: 600px;
  }

  &-title {
    font-family: Bitter;
    font-style: italic;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &-text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  &-button {
    width: 100%;
  }

  &-table {
    &-data {
      font-family: Inter;
      font-weight: 500;
      line-height: 24px;
      flex: 1;
    }
  }
}

.image {
  &-wrapper {
    background-color: #f0f0ea;
    border-radius: 20px 0px 0px 20px;
    border: 4px solid #ffffff;
    box-sizing: border-box;
    width: 600px;
    height: 680px;
  }
}

img {
  max-width: 100%;
  height: 100%;
  position: relative;
  height: 520px;
  top: 80px;
  left: 60px;
}

table {
  border-collapse: collapse;

  td {
    /* Last 2 digit is opacity */
    border-top: 1px solid #21093a15;
    border-bottom: 1px solid #21093a15;

    display: flex;
    text-align: left;
    padding: 12px 0px 12px 0px;
    gap: 16px;
  }
}
</style>
