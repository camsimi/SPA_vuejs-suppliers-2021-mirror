import Vue from 'vue'
import App from './App.vue'
import Supplier from "./components/Supplier";
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import VueRouter from 'vue-router'
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

Vue.use(VueRouter)

Vue.config.productionTip = false

// Resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const router = new VueRouter({
  mode: 'history',
  routes : [
    {path: '/map', component: SuppliersMap},
    {path: '/suppliers', component: SuppliersList},
    {path: '/supplier', component: Supplier}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
