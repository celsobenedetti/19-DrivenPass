<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";

import router from "@/router";
import { fetchWifis } from "@/common/utils/axios";
import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const wifis = ref(userItems.getWifis);
    return { wifis, router };
  },
  async mounted() {
    currentPageTitle.setTitle("Your wifis");
    await fetchWifis();
  },
});
</script>

<template>
  <main class="container">
    <template v-if="wifis.length">
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
    </template>
    <div v-else class="container">There are no items to show</div>

    <div class="icon add-icon" @click="router.push('/wifis/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </main>
</template>
