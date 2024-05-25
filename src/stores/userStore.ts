import { defineStore } from "pinia";
import { defaultCalculatorState } from "@/models/calculator.model";
import { defaultUserDetailsState } from "@/models/user.model";
import type userCalculatorState from "@/models/calculator.model";
import type userDetailState from "@/models/user.model";

interface UserState {
  calculator: userCalculatorState;
  userDetails: userDetailState;
}

export const useUserStore = defineStore("userStore", {
  state: (): UserState => ({
    // Define your state properties here
    calculator: { ...defaultCalculatorState },
    userDetails: { ...defaultUserDetailsState },
  }),
  actions: {
    // Define your actions here
    clearState() {
      this.calculator = defaultCalculatorState;
      this.userDetails = defaultUserDetailsState;
    },
  },
  getters: {
    monthlyPayment: (state) => {
      return (
        (state.calculator.amount / state.calculator.period) *
        1.1
      ).toFixed(2);
    },
  },
});
