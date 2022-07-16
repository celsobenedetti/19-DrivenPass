<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

import accessToken from "@/global/apiAccessToken";

export default defineComponent({
  props: {
    pageTitle: String,
  },
  methods: {
    logUserOut() {
      accessToken.logUserOut();
    },
    redirectHome() {
      router.push("/");
    },
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
    <h3>Jonatn</h3>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/components/BannerHeaderStyle";
</style>
