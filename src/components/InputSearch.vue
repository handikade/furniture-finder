<template>
  <div class="input-search">
    <input
      class="input-search__input"
      type="text"
      :value="value"
      @input="handleInput"
      placeholder="Search furniture..."
    >
    <div class="input-search__icon">
      <img :src="searchIcon" alt="Search Icon">
    </div>
  </div>
</template>

<script>
  export default {
    name: "InputSearch",
    props: {
      value: { type: String, default: "" }
    },
    data() {
      return {
        searchIcon: require("@/assets/search.svg")
      };
    },
    methods: {
      handleInput(e) {
        this.$emit("input", e.target.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .input-search {
    display: flex;
    margin-bottom: 20px;

    &__input {
      display: block;
      width: 100%;
      background: lighten(#106cc8, 2.5%);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: bold;
      border: none;
      height: 40px;
      padding: 0 10px;
      flex-grow: 1;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      &::placeholder {
        opacity: 1;
        color: lighten(#106cc8, 30%);
      }
    }

    &__icon {
      flex-basis: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: darken(#106cc8, 5%);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>