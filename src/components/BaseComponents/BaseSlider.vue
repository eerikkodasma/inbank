<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <input
        :value="props.modelValue"
        :min="min"
        :max="max"
        type="range"
        class="slider"
        @input="$emit('update:modelValue', Number($event.target.value))"
      />
    </div>
    <div class="slider-labels">
      <div>{{ minLabel }}</div>
      <div>{{ maxLabel }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
    validator(value: Number, props) {
      return value < (props.max as Number);
    },
  },
  max: {
    type: Number,
    required: true,
  },
  minLabel: {
    type: String,
    required: true,
  },
  maxLabel: {
    type: String,
    required: true,
  },
});

const trackPercentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.slider {
  appearance: none;
  background: #e9e9e9;
  outline: none;
  width: 100%;
  height: 4px;
  transition: opacity 0.2s;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    $text-color 0%,
    $text-color calc(v-bind(trackPercentage) * 1%),
    #ddd calc(v-bind(trackPercentage) * 1%),
    #ddd 100%
  );

  &::-webkit-slider-thumb {
    appearance: none;
    background: url("@/assets/images/image.png");
    background-size: contain;
    cursor: pointer;
    width: 52px;
    height: 36px;
  }

  &::-moz-range-thumb {
    appearance: none;
    background: url("@/assets/images/image.png");
    background-size: contain;
    cursor: pointer;
    width: 52px;
    height: 36px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-wrapper {
    width: 100%;
    height: 36px;
    align-content: center;
  }

  &-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
      font-family: Inter;
      font-size: 14px;
      line-height: 20px;
      color: #606060;
    }
  }
}
</style>
