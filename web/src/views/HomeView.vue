<template>
  <div v-if="!token">Loading...</div>
  <div v-else class="home"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import tokenAccess from "@/global/apiAccessToken";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  setup() {
    const token = ref("");
    return { token };
  },
  async mounted() {
    const token = await tokenAccess.validateCachedToken();
    if (!token) router.push("/signin");
    else this.token = token;
  },
});
</script>
