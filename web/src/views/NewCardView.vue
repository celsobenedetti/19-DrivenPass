<script lang="ts">
import { defineComponent } from "vue";
import { CardSchema } from "@/common/utils/validation";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      title: undefined,
      number: undefined,
      cardholderName: undefined,
      securityCode: undefined,
      expirationDate: undefined,
      password: undefined,
      type: undefined,
    };

    return { formInput, CardSchema };
  },
});
</script>

<template>
  <main class="container">
    <Form
      :inputObject="formInput"
      :formSchema="CardSchema"
      title="Card"
      apiEndpoint="cards"
      redirectTo="/"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
