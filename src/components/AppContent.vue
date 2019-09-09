<template>
  <div class="app-content">
    <l-container>
      <div class="app-content__content">
        <!-- @slot Use this slot content -->
        <slot/>
      </div>
    </l-container>
  </div>
</template>

<script>
  /**
   * Content component displaying products
   *
   * @displayName App Content
   */

  import LContainer from "@/components/__layout/LContainer.vue";

  export default {
    name: "AppContent",
    components: {
      LContainer
    }
  };
</script>

<style lang="scss" scoped>
  .app-content {
    background-color: #ffffff;

    &__content {
      padding: 25px;
    }

    @media (max-width: 425px) {
      &__content {
        padding: 25px 15px;
      }
    }
  }
</style>