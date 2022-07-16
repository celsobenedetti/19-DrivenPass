<template>
  <div v-if="!token">Loading...</div>
  <div v-else class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tokenAccess from "@/global/apiAccessToken";
import router from "@/router";
import { ref } from "vue";

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
