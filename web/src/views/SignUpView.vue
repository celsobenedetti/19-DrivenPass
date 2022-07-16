<template>
  <SignPageForm :pageType="SignPageTypes.SIGNUP" />
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
