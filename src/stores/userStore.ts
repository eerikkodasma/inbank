import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    // Define your state properties here
    amount: 700,
    period: 2,
  }),
  actions: {
    // Define your actions here
  },
  getters: {
    monthlyPayment: (state) => {
      return ((state.amount / state.period) * 1.1).toFixed(2);
    }
  }
});
