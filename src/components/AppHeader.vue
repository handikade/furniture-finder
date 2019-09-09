<template>
  <div class="app-header">
    <l-container>
      <div class="app-header__content">
        <!-- @slot Use this slot content -->
        <slot/>
      </div>
    </l-container>
  </div>
</template>

<script>
  /**
   * Header component displaying searchbar and filter selection
   *
   * @displayName App Header
   */

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