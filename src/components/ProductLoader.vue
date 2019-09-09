<template>
  <div class="product-loader">
    <ui-loader/>
  </div>
</template>

<script>
  /**
   * Loading component for products
   *
   * @displayName Product Loader
   */
  import UiLoader from "@/components/__ui/loader/UiLoader";

  export default {
    name: "ProductLoader",
    components: {
      UiLoader
    }
  };
</script>

<style lang="scss" scoped>
  .product-loader {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>