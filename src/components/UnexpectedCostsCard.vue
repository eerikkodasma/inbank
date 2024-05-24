<template>
  <div class="header-container">
    <div class="header-wrapper">
      <div class="header-title-wrapper">
        <div class="header-label">Mini loan</div>
        <h2 class="header-title">Take charge of unexpected costs</h2>
      </div>
      <div class="header-text">
        Finance unforeseen expenses with Inbank. A quick and easy application
        process with an instant credit decision.
      </div>
    </div>
    <BaseButton :isPrimary="false" @click="scrollToElement"
      >Apply now</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseComponents/BaseButton.vue";

function scrollToElement() {
  const element = document.getElementById("calculator");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.header {
  &-container {
    background-color: #d9d4a7;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 80px 40px 80px 40px;
    border-radius: 200px;
    gap: 24px;
    flex: 40%;

    @media screen and (max-width: $small-screen) {
      padding: 64px 24px 64px 24px;
      border-radius: 100px;
      gap: 24px;
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;

    @media screen and (max-width: $small-screen) {
      gap: 8px;
    }
  }

  &-label {
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
  }

  &-title {
    font-family: Bitter;
    font-style: italic;
    font-size: 68px;
    line-height: 72px;
    margin: 0px;

    @media screen and (max-width: $medium-screen) {
      font-size: 32px;
      line-height: 36px;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &-text {
    font-family: Inter;
    font-size: 16px;
    line-height: 24px;
    opacity: 90%;
  }
}
</style>
