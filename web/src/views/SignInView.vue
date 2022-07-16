<template>
  <SignPageForm :pageType="SignPageTypes.SIGNIN" />
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
