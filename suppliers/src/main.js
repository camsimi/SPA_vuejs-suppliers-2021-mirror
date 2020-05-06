import Vue from 'vue'
import App from './App.vue'
import Supplier from "./components/Supplier";
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import VueRouter from 'vue-router'
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Vuex from "vuex";
import axios from "axios";

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
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

const store = new Vuex.Store({
  state: {
    suppliers: [],
    loading: false,
    error: null
  },
  mutations: {
    loadSuppliers: function(state, suppliers) {
      state.suppliers = suppliers;
    },
    setLoading: function(state, loading){
      state.loading = loading;
    },
    setError: function(state, error){
      state.error = error;
    }
  },
  actions: {
    getSuppliers: function(context){
      context.commit('setLoading', true);
      axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
          .then(resolve => {
            context.commit('setLoading', false);
            context.commit('loadSuppliers', resolve.data);
          })
          .catch((error) => {
            context.commit('setLoading', false);
            context.commit('setError', error);
          })
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
