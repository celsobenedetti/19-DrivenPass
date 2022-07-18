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
    const credentials = ref(userItems.getCredentials);
    return { credentials, router };
  },
});
</script>

<template>
  <main class="container">
    <ItemDisplay :item="credentials[$route.params.id]" />
  </main>
</template>

<style lang="scss" scoped></style>
