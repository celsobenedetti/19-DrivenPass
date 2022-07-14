<template>
  <main class="page-wrapper">
    <div class="logo-wrapper">
      <font-awesome-icon icon="fa-lock" />
      <h1>DrivenPass</h1>
    </div>
    <SignPageForm :pageType="SignPageTypes.SIGNIN" />
  </main>
</template>

<script lang="ts">
import { SignPageTypes } from "@/common/types";
import SignPageForm from "@/components/SignPageForm.vue";

export default {
  components: {
    SignPageForm,
  },
  setup() {
    return { SignPageTypes };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/views/SignPageViewStyle";
</style>
