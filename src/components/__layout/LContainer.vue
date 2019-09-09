<template>
  <div class="layout-container">
    <!-- @slot Use this slot content -->
    <slot/>
  </div>
</template>

<script>
  /**
   * Container component
   *
   * @displayName Layout Container
   */
  export default {
    name: "LayoutContainer"
  };
</script>

<style lang="scss" scoped>
  .layout-container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>