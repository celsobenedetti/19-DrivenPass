<script lang="ts">
import { SignFormProps, SignPageTypes } from "@/common/types";
import ModalAlert from "@/components/ModalAlert.vue";
import LockLogo from "@/components/LockLogo.vue";
import { ref, defineComponent, PropType } from "vue";
import { FormInput, validateForm } from "@/common/utils/validation";
import { postData } from "@/common/utils/axios";
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

    const input = ref<FormInput>({
      email: "",
      password: "",
    });

    const formErrors = ref("");
    const requestError = ref("");
    const isLoading = ref(false);

    return { isSignUp, input, formErrors, isLoading, requestError };
  },

  methods: {
    async handleSubmit() {
      const errorMessage = validateForm(this.input);
      if (errorMessage) return (this.formErrors = errorMessage);

      const endpoint = this.isSignUp ? "signup" : "signin";

      this.isLoading = true;
      const { data, error } = await postData(endpoint, this.input);
      this.isLoading = false;

      if (error) return (this.requestError = error.message);

      accessToken.setToken(data);
      router.push("/");
    },
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
    <input v-model="input.password" name="password" type="text" required />

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
    v-if="formErrors"
    title="Invalid input"
    :content="formErrors"
    @close-modal="formErrors = ''"
  />

  <ModalAlert
    v-if="requestError"
    title="Request was unsuccessful"
    :content="requestError"
    @close-modal="requestError = ''"
  />
</template>

<style scoped lang="scss">
@import "@/styles/components/SignPageFormStyle";
</style>
