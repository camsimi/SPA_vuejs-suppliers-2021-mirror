<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <p v-if="error">Il y a une erreur</p>
        <p v-if="loading">Chargement en cours</p>
        <ul>
            <li class="supplier-list">
                <Supplier v-for="supplier in suppliers" :key="supplier.id" :name="supplier.name" :status="supplier.status" :checked-at="formatDate()"></Supplier>
            </li>
        </ul>
    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import {format} from "timeago.js";
    const axios = require('axios');

    export default {
        name: "SuppliersList.vue",
        components: {
            Supplier,
        },
        data() {
            return {
                suppliers: [
                    // {
                    //     id: 1,
                    //     name: "Fournisseur 1 ?",
                    //     status: true,
                    //     checkedAt: new Date()
                    // },
                    // {
                    //     id: 2,
                    //     name: "Fournisseur 2",
                    //     status: false,
                    //     checkedAt: new Date()
                    // }
                ],
                loading: false,
                error: null
            }
        },
        methods: {
            formatDate () {
               return format(this.checkedAt);
            }
        },
        mounted: function () {
                this.loading = true;
                axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
                    .then(resolve => {
                        this.loading = false;
                        this.suppliers = resolve.data;
                    })
                    .catch((error) => {
                        this.loading = false;
                        this.error = error;
                        return this.error;
                    })
        }
    }

</script>

<style scoped>
li {
    list-style-type: none;
}
.supplier {
    margin-bottom: 10px;
}
</style>