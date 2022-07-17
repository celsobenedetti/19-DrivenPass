<script lang="ts">
import { defineComponent, ref } from "vue";
import tokenAccess from "@/global/apiAccessToken";
import router from "@/router";
import { fetchAllUserItems } from "@/common/utils/axios";
import userItems from "@/global/userItems";
import currentPageTitle from "@/global/currentPageTitle";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Item,
  },
  setup() {
    const token = ref("");
    const items = ref(userItems.getItems);

    return { token, items, router };
  },
  async mounted() {
    const token = await tokenAccess.validateCachedToken();
    if (!token) return router.push("/signin");

    currentPageTitle.setTitle("My storage");
    this.token = token;
    await fetchAllUserItems();
  },
  computed: {
    credentialsCount() {
      return this.items.credentials?.length || 0;
    },
    notesCount() {
      return this.items.notes?.length || 0;
    },
    cardsCount() {
      return this.items.cards?.length || 0;
    },
    wifiCount() {
      return this.items.wifis?.length || 0;
    },
    documentsCount() {
      return this.items.documents?.length || 0;
    },
  },
});
</script>

<template>
  <div v-if="!token">Loading...</div>
  <div v-else class="home">
    <Item
      title="Credentials"
      redirectTo="/credentials"
      :itemsCount="credentialsCount"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>

    <Item title="Notes" redirectTo="/notes" :itemsCount="notesCount">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-book" />
      </template>
    </Item>

    <Item title="Cards" :itemsCount="cardsCount" redirectTo="/cards">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wallet" />
      </template>
    </Item>

    <Item title="Wifi" redirectTo="/wifis" :itemsCount="wifiCount">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-wifi" />
      </template>
    </Item>

    <Item
      title="Documents"
      redirectTo="/documents"
      :itemsCount="documentsCount"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-address-card" />
      </template>
    </Item>

    <div class="icon add-icon" @click="router.push('/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/views/HomeViewStyle";
</style>
