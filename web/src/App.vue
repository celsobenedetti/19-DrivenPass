<template>
  <div class="page-wrapper">
    <BannerHeader v-if="shouldRenderHeader" />
    <router-view />
  </div>
  <!-- <nav v-if="shouldRenderHeader"> -->
  <!--   <router-link to="/">Home</router-link> -->
  <!--   <router-link to="/signup">signup</router-link> -->
  <!--   <router-link to="/signin">signin</router-link> -->
  <!-- </nav> -->
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BannerHeader from "@/components/BannerHeader.vue";

export default {
  components: {
    BannerHeader,
  },
  setup() {
    const route = useRoute();
    const shouldRenderHeader = computed(
      () => !route.name?.toString().includes("sign")
    );

    return { shouldRenderHeader };
  },
};
</script>
