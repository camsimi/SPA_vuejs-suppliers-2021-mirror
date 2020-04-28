import Vue from 'vue'
import App from './App.vue'
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    SuppliersList,
    SuppliersMap
  }
}).$mount('#app')
