<script lang="ts">
import { defineComponent, ref } from "vue";
import currentPageTitle from "@/global/currentPageTitle";
import userItems from "@/global/userItems";
import router from "@/router";

import { fetchNotes } from "@/common/utils/axios";
import Item from "@/components/HomeStorageItem.vue";

export default defineComponent({
  components: {
    Item,
  },
  setup() {
    const notes = ref(userItems.getNotes);
    return { notes, router };
  },
  async mounted() {
    currentPageTitle.setTitle("Your notes");
    await fetchNotes();
  },
});
</script>

<template>
  <main class="container">
    <template v-if="notes.length">
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
    </template>
    <div v-else class="container">There are no items to show</div>

    <div class="icon add-icon" @click="router.push('/notes/new')">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>
  </main>
</template>
