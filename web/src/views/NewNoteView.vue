<script lang="ts">
import { defineComponent } from "vue";
import { NoteSchema } from "@/common/utils/validation";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      title: undefined,
      content: undefined,
    };

    return { formInput, NoteSchema };
  },
});
</script>

<template>
  <main class="container">
    <Form
      :inputObject="formInput"
      :formSchema="NoteSchema"
      title="Note"
      apiEndpoint="notes"
      redirectTo="/"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
