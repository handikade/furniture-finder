<template>
  <ui-card>
    <div class="product-card">
      <div class="product-card__header">
        <div class="product-card__header__name">{{ name }}</div>
        <div class="product-card__header__price">{{ price | intToIdr }}</div>
      </div>
      <div class="product-card__desc">{{ description | trimStr }}</div>
      <div class="product-card__styles">
        <ui-chip :key="key" v-for="(style, key) in styles">{{ style }}</ui-chip>
      </div>
      <div class="product-card__delivery">Delivery Days: {{ delivery }}</div>
    </div>
  </ui-card>
</template>

<script>
  /**
   * Card for displaying product data
   *
   * @displayName Product Card
   */
  import UiCard from "@/components/__ui/card/UiCard";
  import UiChip from "@/components/__ui/chip/UiChip";

  export default {
    name: "product-card",
    components: {
      UiCard,
      UiChip
    },
    props: {
      name: { type: String, default: "" },
      price: { type: Number, default: 0 },
      description: { type: String, default: "" },
      styles: {
        type: Array,
        default() {
          return [];
        }
      },
      delivery: { type: String, default: "" }
    }
  };
</script>

<style lang="scss" scoped>
  .product-card {
    padding: 13px 26px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
      font-weight: bold;

      &__name {
        font-size: 1rem;
      }

      &__price {
        color: #ff9e10;
        font-size: 0.75rem;
      }
    }

    &__desc {
      font-size: 0.75rem;
      margin-bottom: 15px;
      line-height: 1.1;
      color: #222222;
    }

    &__styles {
      font-size: 0.75rem;
      margin-bottom: 15px;
      color: #277acd;
    }

    &__delivery {
      font-size: 0.75rem;
      text-align: right;
      font-weight: bold;
      color: #277acd;
      text-decoration: underline;
    }

    @media (max-width: 425px) {
      padding: 10px 15px;
    }
  }
</style>