<script lang="ts">
import { SignFormProps, SignPageTypes } from "@/common/types";
import ModalAlert from "@/components/ModalAlert.vue";
import LockLogo from "@/components/LockLogo.vue";
import { ref, defineComponent, PropType } from "vue";
import { validateForm, IFormInput } from "@/common/utils/validation";
import { usePost } from "@/common/utils/axios";
import accessToken from "@/global/apiAccessToken";
import router from "@/router";

export default defineComponent({
  props: {
    pageType: String as PropType<SignPageTypes>,
  },
  components: {
    LockLogo,
    ModalAlert,
  },

  setup(props: SignFormProps | any) {
    const isSignUp = props.pageType === SignPageTypes.SIGNUP;

    const input = ref<IFormInput>({
      email: "",
      password: "",
    });

    const modalMessage = ref({
      title: "",
      content: "",
    });

    const isLoading = ref(true);

    return {
      isSignUp,
      input,
      isLoading,
      modalMessage,
    };
  },

  methods: {
    async handleSubmit() {
      const modalMessage = validateForm(this.input);
      if (modalMessage) {
        return this.renderModal({
          title: "Invalid input",
          content: modalMessage,
        });
      }

      const endpoint = this.isSignUp ? "signup" : "signin";

      this.isLoading = true;
      const { data, error } = await usePost(endpoint, this.input);
      this.isLoading = false;

      if (error) {
        return this.renderModal({
          title: "Request was unsuccessful",
          content: error.message,
        });
      }

      accessToken.setToken(data.token);

      if (!this.isSignUp) router.push("/");
      else {
        this.renderModal({
          title: "Nice!",
          content: "Registration successfully completed",
        });
      }
    },

    renderModal(message: { title: string; content: string }) {
      this.modalMessage = message;
    },

    closeModal() {
      if (accessToken.getToken.value) router.push("/");
      else this.modalMessage = {};
    },
  },

  async mounted() {
    const token = await accessToken.validateCachedToken();
    if (token) router.push("/");
    else this.isLoading = false;
  },
});
</script>

<template>
  <LockLogo />
  <div v-if="isLoading">Loading...</div>
  <form v-else @submit.prevent="handleSubmit">
    <label for="username">Email </label>
    <input v-model="input.email" name="email" type="text" required />
    <label for="password">Password </label>
    <input v-model="input.password" name="password" type="password" required />

    <button @click="handleSubmit">
      {{ isSignUp ? "Sign Up" : "Login" }}
    </button>

    <button
      v-if="isSignUp"
      class="button-alert"
      @click="() => $router.push('signin')"
    >
      &lt; Go back
    </button>

    <div v-else class="link-wrapper">
      <hr />
      <router-link to="/signup">Don't have an account? Sign up</router-link>
    </div>
  </form>

  <ModalAlert
    v-if="modalMessage.content"
    :title="modalMessage.title"
    :content="modalMessage.content"
    @close-modal="closeModal"
  />
</template>

<style scoped lang="scss">
@import "@/styles/components/FormsStyle";
@import "@/styles/components/SignPageFormStyle";
</style>
