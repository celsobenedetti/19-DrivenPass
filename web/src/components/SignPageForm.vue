<script lang="ts">
import { SignFormProps, SignPageTypes } from "@/common/types";
import ModalAlert from "@/components/ModalAlert.vue";
import LockLogo from "@/components/LockLogo.vue";
import { validateForm } from "@/utils/validation/signFormValidation";
import { ref, defineEmits } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

export default {
  props: {
    pageType: String,
  },
  components: {
    ModalAlert,
    LockLogo,
  },
  emits: ["isLoading"],

  setup(props: SignFormProps) {
    const isSignUp = props.pageType === SignPageTypes.SIGNUP;

    const input = ref({
      email: "",
      password: "",
    });

    const formErrors = ref("");

    const handleSubmit = async () => {
      const errorMessage = validateForm(input.value);
      if (errorMessage) return (formErrors.value = errorMessage);
    };

    return { input, isSignUp, handleSubmit, formErrors };
  },
};
</script>

<template>
  <LockLogo />
  <form @submit.prevent="handleSubmit">
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
</template>

<style scoped lang="scss">
@import "@/styles/components/SignPageFormStyle";
</style>
