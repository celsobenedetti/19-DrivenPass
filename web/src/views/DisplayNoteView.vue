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
    const notes = ref(userItems.getNotes);
    return { notes, router };
  },
});
</script>

<template>
  <main class="container">
    <ItemDisplay :item="notes[$route.params.id]" apiDeleteEndpoint="notes" />
  </main>
</template>
