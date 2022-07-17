<script lang="ts">
import { defineComponent } from "vue";
import { WifiSchema } from "@/common/utils/validation";
import Form from "@/components/NewItemForm.vue";

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const formInput = {
      title: undefined,
      network: undefined,
      password: undefined,
    };

    return { formInput, WifiSchema };
  },
});
</script>

<template>
  <main class="container">
    <Form
      :inputObject="formInput"
      :formSchema="Wifichema"
      title="Wifi"
      apiEndpoint="wifi"
      redirectTo="/"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/views/NewItemViewStyle";
</style>
