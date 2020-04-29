import Vue from 'vue'
import App from './App.vue'
// import Suppliers from "./components/Suppliers";
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes : [
    {path: '/map', component: SuppliersMap},
    {path: '/suppliers', component: SuppliersList}
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
