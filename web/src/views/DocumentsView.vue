<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";
import router from "@/router";

import { fetchDocuments } from "@/common/utils/axios";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const documents = ref(userItems.getDocuments);
    return { documents, router };
  },
  async mounted() {
    currentPageTitle.setTitle("Your documents");
    await fetchDocuments();
  },
});
</script>

<template>
  <main class="container">
    <template v-if="documents.length">
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
    </template>
    <div v-else class="container">There are no items to show</div>

    <div class="icon add-icon" @click="router.push('/documents/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </main>
</template>
