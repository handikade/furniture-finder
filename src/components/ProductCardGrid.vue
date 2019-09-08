<template>
  <div class="product-card-grid">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "ProductCardGrid"
  };
</script>

<style lang="scss" scoped>
  .product-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
</style>