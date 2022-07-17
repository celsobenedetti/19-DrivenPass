<script lang="ts">
import { defineComponent } from "vue";
import { DocSchema } from "@/common/utils/validation";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      number: undefined,
      type: undefined,
    };

    return { formInput, DocSchema };
  },
});
</script>

<template>
  <main class="container">
    <Form
      :inputObject="formInput"
      :formSchema="DocSchema"
      title="Document"
      apiEndpoint="docs"
      redirectTo="/"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
