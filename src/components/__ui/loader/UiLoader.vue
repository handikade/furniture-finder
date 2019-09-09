<template>
  <div class="ui-loader"></div>
</template>

<script>
  /**
   * Spinning circle component
   *
   * @displayName Ui Loader
   */
  export default {
    name: "UiLoader"
  };
</script>

<style lang="scss" scoped>
  .ui-loader {
    width: 40px;
    height: 40px;
    border-width: 3px;

    border-style: solid;

    border-top-color: rgba(#106cc8, 1);
    border-right-color: rgba(#106cc8, 0.25);
    border-bottom-color: rgba(#106cc8, 0.25);
    border-left-color: rgba(#106cc8, 0.25);

    border-radius: 50%;

    animation: spin 750ms ease infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>