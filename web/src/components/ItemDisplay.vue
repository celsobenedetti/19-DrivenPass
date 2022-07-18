<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Item } from "@/common/utils/validation";
import { useDelete } from "@/common/utils/axios";
import router from "@/router";

import ModalAlert from "@/components/ModalAlert.vue";

export default defineComponent({
  props: {
    item: Object as PropType<Item>,
    apiDeleteEndpoint: String,
  },
  components: {
    ModalAlert,
  },
  setup(props: any) {
    if (!props.item) router.push("/");

    const errorMessage = ref({
      title: "",
      content: "",
    });

    return { ...props, errorMessage };
  },
  methods: {
    async deleteItem() {
      const { error } = await useDelete(this.apiDeleteEndpoint, this.item.id);
      if (error) {
        this.renderModal({
          title: "Error deleting item",
          content: error.message,
        });
      } else {
        router.push("/");
      }
    },

    renderModal(message: { title: string; content: string }) {
      this.errorMessage = message;
    },

    closeModal() {
      this.errorMessage = {};
    },
  },
});
</script>

<template>
  <template v-if="item">
    <h1>{{ item.title }}</h1>
    <template v-for="(value, key) in item" :key="key">
      <template v-if="key != 'title' && key != 'id'">
        <h2>{{ key }}</h2>
        <h3>{{ value }}</h3>
      </template>
    </template>
    <div class="delete-icon" @click="deleteItem">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </div>
  </template>

  <ModalAlert
    v-if="errorMessage.content"
    :title="errorMessage.title"
    :content="errorMessage.content"
    @close-modal="closeModal"
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/ItemDisplayStyle";
</style>
