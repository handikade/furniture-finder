<template>
  <div class="ui-card">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "UiCard"
  };
</script>

<style lang="scss" scoped>
  .ui-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.1);
  }
</style>