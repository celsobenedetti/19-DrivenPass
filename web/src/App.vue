<template>
  <nav v-if="shouldRenderHeader">
    <router-link to="/">Home</router-link>
    <router-link to="/signup">signup</router-link>
    <router-link to="/signin">signin</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const shouldRenderHeader = computed(
      () => !route.name?.toString().includes("sign")
    );

    return { shouldRenderHeader };
  },
};
</script>
