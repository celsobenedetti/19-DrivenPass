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
    const cards = ref(userItems.getCards);
    return { cards };
  },
  mounted() {
    currentPageTitle.setTitle("Your cards");
  },
});
</script>

<template>
  <main class="container">
    <Item
      v-for="(card, index) of cards"
      :title="card.title"
      :key="card.title"
      :redirectTo="`/cards/${index}`"
      :itemsCount="-1"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>
  </main>
</template>
