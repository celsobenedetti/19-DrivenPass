<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <font-awesome-icon icon="fa-lock"></font-awesome-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
