<template>
  <div id="calculator" class="calculator">
    <div class="slider-wrapper">
      <div class="slider-row">
        <BaseSlider
          v-model="store.calculator.amount"
          :min="minAmount"
          :max="maxAmount"
          :min-label="`${minAmount} €`"
          :max-label="`${maxAmount} €`"
          @update:model-value="(value) => (store.calculator.amount = value)"
        />
        <BaseInput
          v-model="store.calculator.amount"
          id="amount"
          name="amount"
          label="Amount"
          placeholder="Amount"
          type="number"
          class="slider-input"
          required
          :min="minAmount"
          :max="maxAmount"
          :errors="errors['amount']"
          @update:model-value="() => (errors = {})"
        />
      </div>
      <div class="slider-row">
        <BaseSlider
          v-model="store.calculator.period"
          :min="minPeriod"
          :max="maxPeriod"
          :min-label="`${minPeriod} months`"
          :max-label="`${maxPeriod} months`"
          @update:model-value="(value) => (store.calculator.period = value)"
        />
        <BaseSelect
          :model-value="store.calculator.period"
          :options="periodOptions"
          id="period"
          name="period"
          label="Period"
          placeholder="Period"
          type="number"
          class="slider-input"
          required
          :errors="errors['period']"
          @update:model-value="
            (value) => (
              (store.calculator.period = Number(value)), (errors = {})
            )
          "
        />
      </div>
    </div>

    <div class="payment">
      <div class="payment-calculation">
        <div class="payment-calculation-wrapper">
          <div class="payment-title">Monthly payment</div>
          <div class="payment-amount">{{ store.monthlyPayment }}€</div>
        </div>
        <BaseButton @click="handleInput()">Apply now</BaseButton>
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
import LoanPersonalDetailsModal from "@/components/LoanPersonalDetailsModal.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseSlider from "@/components/BaseComponents/BaseSlider.vue";
import BaseSelect from "@/components/BaseComponents/BaseSelect.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import { computed, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { Option } from "@/models/general.model";
import { ErrorsState } from "@/models/general.model";

const store = useUserStore();

const minAmount = 300;
const maxAmount = 7200;
const minPeriod = 2;
const maxPeriod = 72;

const isModalOpen = ref(false);
const months = ref(
  Array.from({ length: maxPeriod - minPeriod + 1 }, (_, i) => minPeriod + i)
);
const errors = ref<ErrorsState>({});

const periodOptions = computed<Option[]>(() => {
  return months.value.map((option) => ({ key: option, value: option }));
});

function handleInput() {
  if (
    store.calculator.amount < minAmount ||
    maxAmount < store.calculator.amount
  ) {
    errors.value["amount"] = ["Amount is out of range"];
  }

  if (
    store.calculator.period < minPeriod ||
    maxPeriod < store.calculator.period
  ) {
    errors.value["period"] = ["Period is out of range"];
  }

  if (Object.keys(errors.value).length === 0) {
    // Proceed the flow if no errors
    isModalOpen.value = !isModalOpen.value;
  }
}
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
    align-items: center;
    gap: 24px;

    @media screen and (max-width: $small-screen) {
      flex-direction: column-reverse;
      gap: 8px;
    }
  }

  &-container {
    flex: 1;
    width: 100%;
  }

  &-input {
    width: 160px;

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
