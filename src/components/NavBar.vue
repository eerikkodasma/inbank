<template>
  <header>
    <img src="@/assets/icons/InBankIcon.svg" />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

header {
  display: flex;
  align-items: center;
  padding: 24px 40px 24px 40px;

  @media screen and (max-width: $small-screen) {
    padding: 16px;
  }
}

img {
  // Needed so the page doesn't move when icon is being loaded
  height: 64px;
}
</style>
