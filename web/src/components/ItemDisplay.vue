<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Item } from "@/common/utils/validation";
import router from "@/router";

export default defineComponent({
  props: {
    item: Object as PropType<Item>,
  },
  setup(props: any) {
    if (!props.item) router.push("/");
    return { ...props };
  },
});
</script>

<template>
  <template v-if="item">
    <h1>{{ item.title }}</h1>
    <template v-for="(value, key) in item" :key="key">
      <template v-if="key != 'title'">
        <h2>{{ key }}</h2>
        <h3>{{ value }}</h3>
      </template>
    </template>
  </template>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ItemDisplayStyle";
</style>
