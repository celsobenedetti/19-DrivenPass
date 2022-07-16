<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  props: ["title", "redirectTo", "itemsCount"],
  setup() {
    return { router };
  },
});
</script>

<template>
  <div class="item-wrapper">
    <div class="icon-title-wrapper">
      <div class="icon-wrapper">
        <slot name="icon">Teta</slot>
      </div>
      <h1>{{ title }}</h1>
    </div>
    <p class="item-count" @click="router.push(redirectTo)">{{ itemsCount }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/components/HomeStorageItemStyle";
</style>
