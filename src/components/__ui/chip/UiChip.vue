<template>
  <div class="ui-chip">
    <!-- @slot Use this slot content -->
    <slot/>
  </div>
</template>

<script>
  /**
   * Chip component
   *
   * @displayName Ui Chip
   */
  export default {
    name: "UiChip"
  };
</script>

<style lang="scss" scoped>
  .ui-chip {
    display: inline-block;
    padding: 3px 10px;
    font-size: 0.75rem;
    border-radius: 7.5px;
    color: #106cc8;
    background-color: lighten(#106cc8, 50%);

    &:not(:first-child) {
      margin-left: 5px;
    }
  }
</style>