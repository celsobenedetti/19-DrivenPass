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
    const notes = ref(userItems.getNotes);
    return { notes };
  },
  mounted() {
    currentPageTitle.setTitle("Your notes");
  },
});
</script>

<template>
  <main class="container">
    <Item
      v-for="(note, index) of notes"
      :title="note.title"
      :key="note.title"
      :redirectTo="`/notes/${index}`"
      :itemsCount="-1"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-key" />
      </template>
    </Item>
  </main>
</template>
