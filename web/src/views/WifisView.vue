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
    const wifis = ref(userItems.getWifis);
    return { wifis };
  },
  mounted() {
    currentPageTitle.setTitle("Your wifis");
  },
});
</script>

<template>
  <main class="container">
    <Item
      v-for="(wifi, index) of wifis"
      :title="wifi.title"
      :key="wifi.title"
      :redirectTo="`/wifis/${index}`"
      :itemsCount="-1"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>
  </main>
</template>
