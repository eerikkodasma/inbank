import { defineStore } from "pinia";
import type { userCalculatorState } from "@/models/calculator.model";
import type { userDetailState } from "@/models/user.model";

interface UserState {
  calculator: userCalculatorState;
  userDetails: userDetailState;
}

export const useUserStore = defineStore("userStore", {
  state: (): UserState => ({
    // Define your state properties here
    calculator: {
      amount: 700,
      period: 2,
    },
    userDetails: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      monthlyIncome: 0,
    },
  }),
  actions: {
    // Define your actions here
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
