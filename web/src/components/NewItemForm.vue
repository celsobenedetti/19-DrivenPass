<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import { ZodSchema } from "zod";
import router from "@/router";
import accessToken from "@/global/apiAccessToken";
import { validateForm, Item } from "@/common/utils/validation";
import { usePost } from "@/common/utils/axios";

import ModalAlert from "@/components/ModalAlert.vue";

export default defineComponent({
  props: {
    title: String,
    apiEndpoint: String,
    redirectTo: String,
    inputObject: Object as PropType<Item>,
    formSchema: Object as PropType<ZodSchema>,
  },
  components: {
    ModalAlert,
  },
  setup(props: any) {
    const formInput = ref(props.inputObject);

    const isLoading = ref(true);

    const errorMessage = ref({
      title: "",
      content: "",
    });

    return {
      formInput,
      isLoading,
      errorMessage,
      router,
      ...props,
    };
  },
  methods: {
    async handleSubmit() {
      console.log("eae");
      const errorMessage = validateForm(this.formSchema, this.formInput);
      if (errorMessage) {
        return this.renderModal({
          title: "Invalid input",
          content: errorMessage,
        });
      }

      this.isLoading = true;
      const { error } = await usePost(this.apiEndpoint, this.formInput);
      this.isLoading = false;

      if (error) {
        return this.renderModal({
          title: "Request was unsuccessful",
          content: error.message,
        });
      }

      router.push("/");
    },
    renderModal(message: { title: string; content: string }) {
      this.errorMessage = message;
    },
  },
  async mounted() {
    const token = await accessToken.validateCachedToken();
    if (!token) router.push("/signin");
    else this.isLoading = false;
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <form v-else @submit.prevent="handleSubmit" class="form-new-item">
    <h1>{{ title }}</h1>

    <template v-for="(value, key) in inputObject" :key="key">
      <label :for="key" class="form-label">{{ key }}</label>
      <input v-model="formInput[key]" :name="key" type="text" required />
    </template>

    <div class="icon arrow-icon" @click="() => router.push('/new')">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
    <div @click="handleSubmit" class="icon check-icon">
      <font-awesome-icon icon="fa-solid fa-check" />
    </div>
  </form>

  <ModalAlert
    v-if="errorMessage.content"
    :title="errorMessage.title"
    :content="errorMessage.content"
    @close-modal="() => (errorMessage = {})"
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/FormsStyle";
@import "@/styles/components/NewItemFormStyle";
</style>
