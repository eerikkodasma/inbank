<template>
  <button
    v-bind="$attrs"
    :class="{
      btn: true,
      'btn--primary': props.isPrimary,
      'btn--secondary': !props.isPrimary,
      'btn--disabled': props.disabled,
    }"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isPrimary: {
    type: Boolean,
    default: true,
  },
});

const onClick = (event: Event) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emits("onClick", event);
};

const emits = defineEmits(["onClick"]);
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.btn {
  padding: 12px 24px 12px 24px;
  border-radius: 100px;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background-color: $primary-button;

  &:hover,
  :focus {
    background-color: $primary-button-hover-color;
  }

  &:active {
    background-color: $primary-button-active-color;
  }
}

.btn--secondary {
  background-color: $secondary-button;

  &:hover,
  :focus {
    background-color: $secondary-button-hover-color;
  }

  &:active {
    background-color: $secondary-button-active-color;
  }
}

.btn--disabled {
  background-color: #dedede;
  cursor: not-allowed;
}
</style>
