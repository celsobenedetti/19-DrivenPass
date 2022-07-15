<template>
  <main class="page-wrapper">
    <SignPageForm :pageType="SignPageTypes.SIGNUP" />
  </main>
</template>

<script lang="ts">
import SignPageForm from "@/components/SignPageForm.vue";
import { SignPageTypes } from "@/common/types";

export default {
  components: {
    SignPageForm,
  },
  setup() {
    return { SignPageTypes };
  },
};
</script>

<style scoped lang="scss"></style>
