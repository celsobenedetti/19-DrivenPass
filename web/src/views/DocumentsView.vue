<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const documents = ref(userItems.getDocuments);
    return { documents };
  },
  mounted() {
    currentPageTitle.setTitle("Your documents");
  },
});
</script>

<template>
  <main class="container">
    <Item
      v-for="(document, index) of documents"
      :title="document.title"
      :key="document.title"
      :redirectTo="`/documents/${index}`"
      :itemsCount="-1"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>
  </main>
</template>
