<template>
  <div class="layout-container">
    <slot/>
  </div>
</template>

<script>
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