<script lang="ts">
import { defineComponent } from "vue";
import { CredentialSchema } from "@/common/utils/validation";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      title: undefined,
      username: undefined,
      password: undefined,
      url: undefined,
    };

    return { formInput, CredentialSchema };
  },
});
</script>

<template>
  <main class="container">
    <Form
      :inputObject="formInput"
      :formSchema="CredentialSchema"
      title="Credential"
      apiEndpoint="credentials"
      redirectTo="/"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
