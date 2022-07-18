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
    const wifis = ref(userItems.getWifis);
    return { wifis, router };
  },
});
</script>

<template>
  <main class="container">
    <ItemDisplay :item="wifis[$route.params.id]" />
  </main>
</template>
