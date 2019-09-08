<template>
  <div class="app-header">
    <l-container>
      <div class="app-header__content">
        <slot/>
      </div>
    </l-container>
  </div>
</template>

<script>
  import LContainer from "@/components/__layout/LContainer";

  export default {
    name: "AppHeader",
    components: {
      LContainer
    }
  };
</script>

<style lang="scss" scoped>
  .app-header {
    background-color: #106cc8;

    &__content {
      padding: 25px;
    }
  }
</style>