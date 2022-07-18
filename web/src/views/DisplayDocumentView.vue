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
    const documents = ref(userItems.getDocuments);
    return { documents, router };
  },
});
</script>

<template>
  <main class="container">
    <ItemDisplay :item="documents[$route.params.id]" apiDeleteEndpoint="docs" />
  </main>
</template>
