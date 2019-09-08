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
  import Multiselect from "vue-multiselect";
  export default {
    name: "InputSelect",
    components: {
      Multiselect
    },
    props: {
      options: {
        type: Array,
        default() {
          [];
        }
      },
      multiple: { type: Boolean, default: false },
      label: { type: String, default: "" }
    },
    data() {
      return {
        value: null
      };
    },
    methods: {
      handleInput(value) {
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
