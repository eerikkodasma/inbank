<template>
  <div class="section">
    <UnexpectedCostsCard />
    <div class="image-content">
      <img src="@/assets/images/IMG_0783 1.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import UnexpectedCostsCard from "../components/UnexpectedCostsCard.vue";

const isMobile = ref(window.innerWidth <= 768);

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth <= 768;
});
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variable.scss";

.section {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 40px 80px 40px;

  @media screen and (max-width: $small-screen) {
    flex-direction: column-reverse;
  }
}

.image-content {
  display: flex;
  // Take space with div before loading img
  width: 100%;
  flex: 60%;
}

img {
  border-radius: 200px;
  max-width: 100%;
  object-fit: cover;
}
</style>
