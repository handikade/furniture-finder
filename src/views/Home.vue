<template>
  <div>
    <app-header>
      <input-search @input="filterByKeyword"/>
      <ui-grid>
        <input-select
          label="Furniture Styles"
          :multiple="true"
          :options="furnitureStyleOptions"
          @input="filterByStyles"
        />
        <input-select
          label="Delivery Time"
          :options="deliveryTimeOptions"
          @input="filterByDeliveryTime"
        />
      </ui-grid>
    </app-header>
    <app-content>
      <product-loader v-if="isInitializing"/>
      <ui-grid v-if="!isInitializing">
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
  /**
   * Main view of the app
   *
   * @displayName Home
   */

  import AppHeader from "@/components/AppHeader";
  import InputSearch from "@/components/InputSearch";
  import UiGrid from "@/components/__ui/grid/UiGrid";
  import InputSelect from "@/components/InputSelect";

  import AppContent from "@/components/AppContent";
  import ProductCard from "@/components/ProductCard";

  import ProductLoader from "@/components/ProductLoader";

  import axios from "axios";

  export default {
    name: "Home",
    components: {
      AppHeader,
      AppContent,
      ProductCard,
      InputSearch,
      InputSelect,
      UiGrid,
      ProductLoader
    },
    data() {
      return {
        url: "https://www.mocky.io/v2/5c9105cb330000112b649af8",
        furnitureStyleOptions: [],
        deliveryTimeOptions: ["Any", "1 Week", "2 Weeks", "1 Month", "More"],
        products: [],
        filteredProducts: [],
        query: {
          keyword: "",
          styles: [],
          deliveryTime: ""
        },
        isInitializing: true
      };
    },
    methods: {
      /**
       * Gets called on page init. Retrieving product data from the API.
       */
      init() {
        axios
          .get(this.url)
          .then(res => {
            this.furnitureStyleOptions = res.data.furniture_styles;
            this.products = res.data.products;
            this.filteredProducts = this.products;
          })
          .finally(() => {
            this.isInitializing = false;
          });
      },
      /**
       * Filter product according to the query
       */
      filter() {
        this.filteredProducts = this.products.filter(product => {
          return (
            this.checkKeyword(product.name, this.query.keyword) &&
            this.checkStyles(product.furniture_style, this.query.styles) &&
            this.checkDeliveryTime(product.delivery_time, this.query.deliveryTime)
          );
        });
      },
      /**
       * Gets called on search input
       *
       * @param {String} keyword The keyword from search input
       */
      filterByKeyword(keyword) {
        this.query.keyword = keyword;

        // Calling the filter funtion
        this.filter();
      },
      /**
       * Return true when product name match with search input
       *
       * @param {String} productName
       * @param {String} keyword
       */
      checkKeyword(productName, keyword) {
        return productName.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      },
      /**
       * Gets called when user select furniture styles
       *
       * @param {Array} styles The style value from selectipn
       */
      filterByStyles(styles) {
        this.query.styles = styles;

        // Calling the filter funtion
        this.filter();
      },
      /**
       * Check if product's furniture styles match
       * 
       * @param {Array} productStyles Product's furniture styles
       * @param {Array} filterStyles FUrniture styles from user selection
       */
      checkStyles(productStyles, filterStyles) {
        return filterStyles.every(style => productStyles.includes(style));
      },
      /**
       * Gets called when user select delivery
       *
       * @param {Number} deliveryTime The delivery time value from selection
       */
      filterByDeliveryTime(deliveryTime) {
        this.query.deliveryTime = deliveryTime;

        // Calling the filter funtion
        this.filter();
      },
      /**
       * Check if product delivery time match
       * 
       * @param {Number} productDeliveryTime Products delivery time
       * @param {Number} deliveryTime Delivery time from user selection
       */
      checkDeliveryTime(productDelveryTime, deliveryTime) {
        switch (deliveryTime) {
          case "1 Week":
            return productDelveryTime == 7;
          case "2 Weeks":
            return productDelveryTime == 14;
          case "1 Month":
            return productDelveryTime == 30;
          case "More":
            return productDelveryTime > 30;
          default:
            return true;
        }
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
