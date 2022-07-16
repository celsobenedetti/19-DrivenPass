<template>
  <div class="backdrop">
    <div class="modal">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <button @click="$emit('close-modal')">Ok</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    content: String,
  },
  emits: ["close-modal"],
};
</script>

<style lang="scss">
@import "@/styles/components/ModalAlertStyle";
</style>
