<script lang="ts">
import { defineComponent, ref } from "vue";
import userItems from "@/global/userItems";
import currentPageTitle from "@/global/currentPageTitle";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const credentials = ref(userItems.getCredentials);
    return { credentials };
  },
  mounted() {
    currentPageTitle.setTitle("Your credentials");
  },
});
</script>

<template>
  <main class="container">
    <Item
      v-for="credential of credentials"
      :key="credential.title"
      redirectTo="/"
      :itemsCount="-1"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>
  </main>
</template>

<style lang="scss" scoped></style>
