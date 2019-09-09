<template>
  <div>
    <label>{{ label }}</label>
    <multiselect
      :close-on-select="true"
      :multiple="multiple"
      :options="options"
      @input="handleInput"
      v-model="value"
    />
  </div>
</template>

<script>
  /**
   * Multiple select input component
   *
   * @displayName Input Select
   */
  import Multiselect from "vue-multiselect";

  export default {
    name: "InputSelect",
    components: {
      Multiselect
    },
    props: {
      /**
       * Select options
       */
      options: {
        type: Array,
        default() {
          [];
        }
      },
      /**
       * Multiple select
       */
      multiple: { type: Boolean, default: false },
      /**
       * Input label
       */
      label: { type: String, default: "" }
    },
    data() {
      return {
        value: null
      };
    },
    methods: {
      /**
       * Gets called on user input
       */
      handleInput(value) {
        /**
         * Input event
         *
         * @type {array}
         */
        this.$emit("input", value);
      }
    }
  };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
  label {
    color: #ffffff;
    font-weight: bold;
    font-size: 0.75rem;
    margin-bottom: 5px;
    display: block;
  }
</style>
