<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";
import { fetchCredentials } from "@/common/utils/axios";
import router from "@/router";

import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const credentials = ref(userItems.getCredentials);
    return { credentials, router };
  },
  async mounted() {
    currentPageTitle.setTitle("Your credentials");
    await fetchCredentials();
  },
});
</script>

<template>
  <main class="container">
    <template v-if="credentials.length">
      <Item
        v-for="(credential, index) of credentials"
        :title="credential.title"
        :key="credential.title"
        :redirectTo="`/credentials/${index}`"
        :itemsCount="-1"
      >
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-key" />
        </template>
      </Item>
    </template>
    <div v-else class="container">There are no items to show</div>

    <div class="icon add-icon" @click="router.push('/credentials/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </main>
</template>
