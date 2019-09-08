<template>
  <div>
    <app-header>
      <input-search v-model="searchKeyword"/>
      <ui-grid>
        <input-select
          placeholder="Furniture Style"
          :multiple="true"
          :options="furnitureStyleOptions"
          v-model="furnitureStyles"
        />
        <input-select
          placeholder="Delivery Time"
          :options="deliveryTimeOptions"
          v-model="deliveryTime"
        />
      </ui-grid>
    </app-header>
    <app-content>
      <ui-grid>
        <product-card
          v-for="(product, key) in filteredProducts"
          :key="key"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :styles="product.furniture_style"
          :delivery="product.delivery_time"
        />
      </ui-grid>
    </app-content>
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import InputSearch from "@/components/InputSearch";
  import UiGrid from "@/components/__ui/grid/UiGrid";
  import InputSelect from "@/components/InputSelect";

  import AppContent from "@/components/AppContent";
  import ProductCard from "@/components/ProductCard";

  import axios from "axios";

  export default {
    name: "home",
    components: {
      AppHeader,
      AppContent,
      ProductCard,
      InputSearch,
      InputSelect,
      UiGrid
    },
    data() {
      return {
        url: "http://www.mocky.io/v2/5c9105cb330000112b649af8",
        searchKeyword: "",
        furnitureStyleOptions: [],
        deliveryTimeOptions: [
          { label: "1 Day", value: 1 },
          { label: "2 Day", value: 2 },
          { label: "1 Week", value: 7 },
          { label: "More", value: -1 }
        ],
        furnitureStyles: [],
        deliveryTime: [],
        products: [],
        filteredProducts: []
      };
    },
    computed: {
      // filteredProducts() {
      //   return this.products.filter(product => {
      //     return (
      //       product.name.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >
      //         -1 &&
      //       this.isSubsetOf(this.furnitureStyleValues, product.furniture_style) &&
      //       if(deliveryTime > 0) {
      //         product.delivery_time == this.deliveryTime
      //       }
      //     );
      //   });
      // },
      furnitureStyleValues() {
        return this.furnitureStyles.map(e => {
          return e.value;
        });
      }
    },
    methods: {
      init() {
        axios.get(this.url).then(res => {
          this.furnitureStyleOptions = this.generateStyleOptions(
            res.data.furniture_styles
          );
          this.products = res.data.products;
          this.filteredProducts = this.products;
        });
      },
      generateStyleOptions(styles) {
        return styles.map(e => {
          return { label: e, value: e };
        });
      },
      extractValue(array) {
        return array.map(e => {
          return e.value;
        });
      },
      isSubsetOf(array1, array2) {
        return array1.every(e => array2.includes(e));
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
