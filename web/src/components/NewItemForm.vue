<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import router from "@/router";
import { Item } from "@/common/utils/validation";

export default defineComponent({
  props: {
    title: String,
    redirectTo: String,
    inputObject: Object as PropType<Item>,
  },
  setup(props: any) {
    const formInput = ref(props.inputObject);
    return { formInput, router };
  },
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-new-item">
    <h1>{{ title }}</h1>
    <template v-for="(value, key) in inputObject" :key="key">
      <label :for="key" class="form-label">{{ key }}</label>
      <input v-model="formInput[key]" :name="key" type="text" required />
    </template>

    <div class="icon arrow-icon" @click="() => router.push('/new')">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
    <div class="icon check-icon">
      <font-awesome-icon icon="fa-solid fa-check" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/components/FormsStyle";
@import "@/styles/components/NewItemFormStyle";
</style>
