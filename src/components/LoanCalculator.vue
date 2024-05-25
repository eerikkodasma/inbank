<template>
  <div id="calculator" class="calculator">
    <div class="slider-wrapper">
      <div class="slider-row">
        <BaseSlider
          v-model="store.calculator.amount"
          :min="300"
          :max="7200"
          min-label="300€"
          max-label="7200€"
          @update:model-value="(value) => (store.calculator.amount = value)"
        />
        <input
          class="slider-input"
          type="number"
          v-model="store.calculator.amount"
        />
      </div>
      <div class="slider-row">
        <BaseSlider
          v-model="store.calculator.period"
          :min="2"
          :max="72"
          min-label="2 months"
          max-label="72 months"
          @update:model-value="(value) => (store.calculator.period = value)"
        />
        <select v-model="store.calculator.period" class="slider-input">
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
          <div class="payment-amount">{{ store.monthlyPayment }}€</div>
        </div>
        <BaseButton @click="() => (isModalOpen = !isModalOpen)"
          >Apply now</BaseButton
        >
      </div>
      <div class="payment-text">
        The calculation is approximate and may differ from the conditions
        offered to you. Please submit a loan application to receive a personal
        offer. Financial services are provided by AS Inbank Finance.
      </div>
    </div>
    <LoanPersonalDetailsModal
      v-if="isModalOpen"
      @close="isModalOpen = !isModalOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseSlider from "@/components/BaseComponents/BaseSlider.vue";
import LoanPersonalDetailsModal from "@/components/LoanPersonalDetailsModal.vue";

const store = useUserStore();

const isModalOpen = ref(false);
const months = ref(Array.from({ length: 99 }, (_, i) => 2 + i));
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

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
    line-height: 24px;
  }

  &-amount {
    font-family: Inter;
    font-size: 68px;
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
    line-height: 16px;
    opacity: 60%;
  }
}
</style>
