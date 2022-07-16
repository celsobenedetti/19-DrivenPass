<template>
  <div class="logo-wrapper">
    <font-awesome-icon icon="fa-lock" />
    <h1>DrivenPass</h1>
  </div>
</template>

<style lang="scss">
div.logo-wrapper {
  @include flex($gap: 1rem);
  margin: 5% auto;

  color: $primary;

  h1 {
    font-family: "Righteous", cursive;
    font-size: $font-lg;
  }

  svg {
    font-size: $font-humungus;
  }
}
</style>
