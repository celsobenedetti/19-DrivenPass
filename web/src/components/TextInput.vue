<template>
  <label for="password">{{ name }}</label>
  <input
    type="text"
    :name="name"
    v-model="input"
    @change="$emit('input-change', [name.toLowerCase(), input])"
    required
  />
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "TextInput",
  props: {
    name: String,
  },
  emits: ["input-change"],
  setup() {
    const input = ref("");
    return { input };
  },
};
</script>

<style></style>
