<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      title: "",
      username: "",
      password: "",
      url: "",
    };

    return { formInput };
  },
});
</script>

<template>
  <main class="container">
    <Form :inputObject="formInput" title="Credential" redirectTo="/" />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
