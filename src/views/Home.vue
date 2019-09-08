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
        furnitureStyleOptions: [],
        deliveryTimeOptions: ["Any", "1 Week", "2 Weeks", "1 Month", "More"],
        products: [],
        filteredProducts: [],
        query: {
          keyword: "",
          styles: [],
          deliveryTime: ""
        }
      };
    },
    computed: {},
    methods: {
      init() {
        axios.get(this.url).then(res => {
          this.furnitureStyleOptions = res.data.furniture_styles;
          this.products = res.data.products;
          this.filteredProducts = this.products;
        });
      },
      filter() {
        this.filteredProducts = this.products.filter(product => {
          return (
            this.processKeyword(product.name, this.query.keyword) &&
            this.processStyles(product.furniture_style, this.query.styles) &&
            this.processDeliveryTime(
              product.delivery_time,
              this.query.deliveryTime
            )
          );
        });
      },
      filterByKeyword(keyword) {
        this.query.keyword = keyword;
        this.filter();
      },
      processKeyword(productName, keyword) {
        return productName.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      },
      filterByStyles(styles) {
        this.query.styles = styles;
        this.filter();
      },
      processStyles(productStyles, filterStyles) {
        return filterStyles.every(style => productStyles.includes(style));
      },
      filterByDeliveryTime(deliveryTime) {
        this.query.deliveryTime = deliveryTime;
        this.filter();
      },
      processDeliveryTime(productDelveryTime, deliveryTime) {
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
