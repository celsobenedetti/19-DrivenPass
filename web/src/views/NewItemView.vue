<script lang="ts">
import { defineComponent } from "vue";
import tokenAccess from "@/global/apiAccessToken";
import router from "@/router";
import currentPageTitle from "@/global/currentPageTitle";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  name: "NewItemView",
  components: {
    Item,
  },
  setup() {
    return { router };
  },
  async mounted() {
    const token = await tokenAccess.validateCachedToken();
    if (!token) return router.push("/signin");
    else currentPageTitle.setTitle("Add new item");
  },
});
</script>

<template>
  <!-- <div v-if="!token">Loading...</div> -->
  <main class="container">
    <Item title="Credentials" redirectTo="/credentials/new" :itemsCount="-1">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>

    <Item title="Notes" redirectTo="/notes/new" :itemsCount="-1">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-book" />
      </template>
    </Item>

    <Item title="Cards" :itemsCount="-1" redirectTo="/cards/new">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wallet" />
      </template>
    </Item>

    <Item title="Wifi" redirectTo="/wifis/new" :itemsCount="-1">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wifi" />
      </template>
    </Item>

    <Item title="Documents" redirectTo="/documents/new" :itemsCount="-1">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-address-card" />
      </template>
    </Item>

    <div class="icon arrow-icon" @click="router.push('/')">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/HomeViewStyle";
</style>
