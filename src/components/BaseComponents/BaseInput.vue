<template>
  <div class="input-container">
    <input
      :value="modelValue"
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :class="[
        'input',
        isModalValueEmpty && 'input-empty',
        errors?.length ? 'input-warning' : disabled && 'input-disabled',
      ]"
      @input="handleInput($event.target.value)"
    />
    <label
      v-if="label"
      :class="[
        'input-label',
        (!isModalValueEmpty || placeholder) && 'input-label-above',
        errors?.length
          ? 'input-label-error'
          : disabled && 'input-label-disabled',
      ]"
      :for="id"
      >{{ label }}</label
    >
    <div
      v-if="supportingText"
      :class="[
        'input-supporting-text',
        errors?.length && 'input-supporting-text-error',
      ]"
    >
      {{ supportingText }}
    </div>
    <div v-if="errors?.length">
      <div v-for="(error, index) in errors" :key="index" class="input-error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, null] as PropType<
      string | number | boolean | null
    >,
    default: undefined,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  },
  supportingText: {
    type: String,
    default: undefined,
  },
  errors: {
    type: Array as PropType<string[] | undefined>,
    default: () => [],
  },
  type: {
    type: String,
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isModalValueEmpty = computed(() => {
  return (
    props.modelValue === undefined ||
    props.modelValue === null ||
    props.modelValue === "" ||
    false
  );
});

function handleInput(value: string | number) {
  if (props.type === "number") {
    value = Number(value);
  }
  emit("update:modelValue", value);
}

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.input {
  padding: 4px 16px;
  border-radius: 8px;
  border: 1px solid $input-color;
  height: 36px;
  color: $text-color;
  outline: none;

  // Change the label color when conditions are correct
  &.input-empty:not(.input-warning):not(.input-disabled) ~ label {
    color: #606060;
  }
  &:hover:not(.input-warning):not(.input-disabled) ~ label,
  &:focus:not(.input-warning):not(.input-disabled) ~ label,
  &.input:not(.input-empty):not(.input-warning):not(.input-disabled) ~ label {
    color: $input-color;
  }

  &-empty {
    border-color: #dedede;

    color: #606060;
  }

  &-disabled {
    color: $disabled-color;
    border-color: $disabled-color;
  }

  &-warning {
    border-color: $error-color;
  }

  &:hover:not(.input-warning):not(.input-disabled) {
    border-color: $input-color;
  }

  &:focus:not(.input-warning):not(.input-disabled) {
    border-color: $input-color;
    border-width: 2px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &-label {
    font-family: Inter;
    position: absolute;
    // Odd number because of border width
    top: 7px;
    left: 15px;

    &:hover {
      border-color: $input-color;
    }

    &:focus {
      border-color: $input-color;
    }

    &-above {
      background-color: white;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      padding: 0px 8px;
      border-radius: 100px;
      top: -8px;
      left: 8px;
    }

    &-disabled {
      color: $disabled-color;
    }

    &-error {
      color: $error-color;
    }
  }

  &-supporting {
    &-text {
      font-family: Inter;
      font-weight: 500;
      line-height: 18px;
      font-size: 12px;
      // Odd number because of border width
      padding: 0px 17px;

      &-disabled {
        color: $disabled-color;
      }

      &-error {
        color: $error-color;
      }
    }
  }

  &-error {
    font-family: Inter;
    font-weight: 500;
    line-height: 18px;
    font-size: 12px;
    padding: 0px 17px;
    color: $error-color;
  }
}
</style>
