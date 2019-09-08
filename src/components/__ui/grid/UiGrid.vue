<template>
  <div class="ui-grid">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "UiGrid"
  };
</script>

<style lang="scss" scoped>
  .ui-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
</style>