<template>
  <div class="calculator">
    <div class="slider-wrapper">
      <div class="slider-row">
        <div class="slider-container">
          <input
            id="amount"
            class="slider"
            type="range"
            v-model="amount"
            min="300"
            max="7200"
          />
          <div class="slider-ranges">
            <span>300€</span>
            <span>7200€</span>
          </div>
        </div>
        <input class="slider-input" type="number" v-model="amount" />
      </div>
      <div class="slider-row">
        <div class="slider-container">
          <input
            v-model="period"
            id="period"
            class="slider"
            type="range"
            min="2"
            max="72"
          />
          <div class="slider-ranges">
            <span>2 months</span>
            <span>72 months</span>
          </div>
        </div>
        <select v-model="period" class="slider-input">
          <option v-for="month in months" :key="month" :value="month">
            {{ month }} months
          </option>
        </select>
      </div>
    </div>

    <div class="payment">
      <div class="payment-calculation">
        <div class="payment-calculation-wrapper">
          <div class="payment-title">Monthly payment</div>
          <div class="payment-amount">{{ monthlyPayment }}€</div>
        </div>
        <BaseButton>Apply now</BaseButton>
      </div>
      <div class="payment-text">
        The calculation is approximate and may differ from the conditions
        offered to you. Please submit a loan application to receive a personal
        offer. Financial services are provided by AS Inbank Finance.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "../stores/userStore";
import BaseButton from "../components/BaseComponents/BaseButton.vue";

const store = useUserStore();
const amount = computed({
  get: () => store.amount,
  set: (value) => store.setAmount(value),
});
const period = computed({
  get: () => store.period,
  set: (value) => store.setPeriod(value),
});
const months = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 72]);

const monthlyPayment = computed(() => {
  return ((amount.value / period.value) * 1.1).toFixed(2);
});
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.calculator {
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
}

.slider {
  width: 100%;

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @media screen and (max-width: $small-screen) {
      flex-direction: column-reverse;
      gap: 8px;
    }
  }

  &-container {
    width: 100%;
  }

  &-input {
    width: 100px;

    @media screen and (max-width: $small-screen) {
      width: 100%;
    }
  }

  &-ranges {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    opacity: 60%;
  }
}

.payment {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-calculation {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &-title {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  &-amount {
    font-family: Inter;
    font-size: 68px;
    font-weight: 400;
    line-height: 72px;

    @media screen and (max-width: $medium-screen) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  &-text {
    font-family: Inter;
    text-align: left;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    opacity: 60%;
  }
}
</style>
