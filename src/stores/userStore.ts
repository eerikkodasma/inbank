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
    // Define your getters here
  }
});
