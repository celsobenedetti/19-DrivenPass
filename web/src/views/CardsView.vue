<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";
import { fetchCards } from "@/common/utils/axios";
import router from "@/router";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const cards = ref(userItems.getCards);
    return { cards, router };
  },
  async mounted() {
    currentPageTitle.setTitle("Your cards");
    await fetchCards();
  },
});
</script>

<template>
  <main class="container">
    <template v-if="cards.length">
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
    </template>
    <div v-else class="container">There are no items to show</div>

    <div class="icon add-icon" @click="router.push('/cards/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </main>
</template>
