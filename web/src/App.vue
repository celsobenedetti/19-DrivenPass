<template>
  <nav v-if="!isSignPage">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    isSignPage() {
      return this.$route.name?.toString().includes("sign");
    },
  },
});
</script>
