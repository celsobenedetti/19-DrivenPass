<script lang="ts">
import { defineComponent, ref } from "vue";
import tokenAccess from "@/global/apiAccessToken";
import router from "@/router";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Item,
  },
  setup() {
    const token = ref("");
    return { token };
  },
  async mounted() {
    const token = await tokenAccess.validateCachedToken();
    if (!token) return router.push("/signin");

    this.token = token;
  },
});
</script>

<template>
  <div v-if="!token">Loading...</div>
  <div v-else class="home">
    <Item title="Credentials" redirectTo="/credentials" :itemsCount="2">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>

    <Item title="Notes" redirectTo="/notes">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-book" />
      </template>
    </Item>

    <Item title="Cards" redirectTo="/cards">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wallet" />
      </template>
    </Item>

    <Item title="Wifi" redirectTo="/wifis">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wifi" />
      </template>
    </Item>

    <Item title="Documents" redirectTo="/documents">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-address-card" />
      </template>
    </Item>

    <div class="add-icon">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/views/HomeViewStyle";
</style>
