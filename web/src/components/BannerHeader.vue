<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import currentPageTitle from "@/global/currentPageTitle";

import accessToken from "@/global/apiAccessToken";

export default defineComponent({
  setup() {
    const pageTitle = currentPageTitle.getTitle;
    return { pageTitle };
  },
  methods: {
    logUserOut() {
      accessToken.logUserOut();
    },
    redirectHome() {
      router.push("/");
    },
  },
  mounted() {
    currentPageTitle.setTitle("My storage");
  },
});
</script>

<template>
  <header>
    <div class="header-top">
      <div class="header-logo" @click="redirectHome">
        <font-awesome-icon icon="fa-lock" />
        <h1>DrivenPass</h1>
      </div>
      <font-awesome-icon
        icon="fa-arrow-right-from-bracket"
        class="header-logout"
        @click="logUserOut"
      />
    </div>
    <h3>{{ pageTitle }}</h3>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/components/BannerHeaderStyle";
</style>
