<template>
  <main class="page-wrapper">
    <div class="logo-wrapper">
      <font-awesome-icon icon="fa-lock" />
      <h1>DrivenPass</h1>
    </div>
    <form action="">
      <label for="username">Email </label>
      <input type="text" name="username" />
      <label for="password">Email </label>
      <input type="text" name="password" />
    </form>
  </main>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
form {
  @include flex($gap: 1rem);
  width: 100vw;
}

div.logo-wrapper {
  font-family: "Righteous", cursive;
  @include flex($gap: 1rem);

  color: $primary;
  font-size: $font-lg;

  svg {
    font-size: $font-humungus;
  }
}
</style>
