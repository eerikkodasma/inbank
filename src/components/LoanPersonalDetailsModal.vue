<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="modal-title-wrapper">
        <div class="modal-title">Personal details</div>
        <button class="close-button" @click="$emit('close')">×</button>
      </div>
      <form id="userDetailsForm" class="form" @submit.prevent="submitForm">
        <BaseInput
          v-model="store.userDetails.firstName"
          id="firstName"
          name="firstName"
          label="First name"
          placeholder="First name"
          required
          :errors="errors['firstName']"
        />
        <BaseInput
          v-model="store.userDetails.lastName"
          id="lastName"
          name="lastName"
          label="Last name"
          placeholder="Last name"
          required
          :errors="errors['lastName']"
        />
        <BaseInput
          v-model="store.userDetails.mobileNumber"
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile number"
          placeholder="Mobile number"
          type="number"
          required
          :errors="errors['mobileNumber']"
        />
        <BaseInput
          v-model="store.userDetails.email"
          id="email"
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          required
          :errors="errors['email']"
        />
        <BaseInput
          v-model="store.userDetails.monthlyIncome"
          id="monthlyIncome"
          name="monthlyIncome"
          label="Monthly income"
          placeholder="Monthly income"
          type="number"
          required
          :errors="errors['monthlyIncome']"
        />
      </form>
      <BaseButton
        form="userDetailsForm"
        type="submit"
        @click.prevent.stop="submitForm()"
        >Submit</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import userDetailState from "@/models/user.model";
import { ErrorsState } from "@/models/general.model";
import { ROUTE_PATHS } from "@/router/paths";
import { useUserStore } from "@/stores/userStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
const store = useUserStore();
const emits = defineEmits(["close"]);
const router = useRouter();
const errors = ref<ErrorsState>({});

const submitForm = () => {
  // Reset errors before checking
  errors.value = {};
  const result: Boolean = validateForm(store.userDetails);
  if (result) {
    emits("close");
    if (store.userDetails.monthlyIncome > 1000) {
      router.push({ name: ROUTE_PATHS.APPROVED });
    } else {
      router.push({ name: ROUTE_PATHS.DENIED });
    }
    return true;
  }
  return false;
};

const validateForm = (form: userDetailState) => {
  if (!form.firstName) {
    errors.value["firstName"] = ["First name is required"];
  }
  if (!form.lastName) {
    errors.value["lastName"] = ["Last name is required"];
  }
  if (!form.mobileNumber) {
    errors.value["mobileNumber"] = ["Mobile number is required"];
  } else {
    if (!/^(55\d{5,6})$/.test(form.mobileNumber)) {
      errors.value["mobileNumber"] = [
        "Mobile number must be 7 or 8 digits and start with 55",
      ];
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value["email"] = ["Email must be valid"];
  }
  if (form.monthlyIncome < 100) {
    errors.value["monthlyIncome"] = ["Monthly income must be greater than 100"];
  }

  return Object.keys(errors.value).length === 0;
};
</script>

<style scoped lang="scss">
.modal {
  &-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &-content {
    display: flex;
    flex-direction: column;
    position: relative;
    background: white;
    border-radius: 30px;
    max-width: 90%;
    padding: 40px;
    width: 400px;
    gap: 24px;
  }

  &-title-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  &-title {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>
