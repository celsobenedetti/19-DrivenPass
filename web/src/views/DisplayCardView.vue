<script lang="ts">
import { defineComponent, ref } from "vue";
import ItemDisplay from "@/components/ItemDisplay.vue";
import userItems from "@/global/userItems";
import router from "@/router";

export default defineComponent({
  components: {
    ItemDisplay,
  },
  setup() {
    const cards = ref(userItems.getCards);
    return { cards, router };
  },
});
</script>

<template>
  <main class="container">
    <ItemDisplay :item="cards[$route.params.id]" />
  </main>
</template>
