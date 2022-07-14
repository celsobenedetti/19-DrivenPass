<template>
  <form @submit.prevent="onSubmit">
    <label for="username">Email </label>
    <input type="text" name="username" v-model="input.email" required />
    <label for="password">Password </label>
    <input type="text" name="password" v-model="input.password" required />

    <button>{{ isSignUp ? "Sign Up" : "Login" }}</button>
    <button
      v-if="isSignUp"
      class="button-back"
      @click="() => $router.push('signin')"
    >
      &lt; Go back
    </button>
    <div v-else class="link-wrapper">
      <hr />
      <router-link to="/signup">Don't have an account? Sign up</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import { SignFormProps, SignPageTypes } from "@/common/types";
import { ref } from "vue";

export default {
  props: {
    pageType: String,
  },
  setup(props: SignFormProps) {
    const isSignUp = props.pageType === SignPageTypes.SIGNUP;

    const input = ref({
      email: "",
      password: "",
    });

    return { input, isSignUp };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/SignPageFormStyle";
</style>
