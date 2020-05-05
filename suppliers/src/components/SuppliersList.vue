<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <ul>
            <li class="supplier-list">
                <Supplier v-for="supplier in $store.state.suppliers" :key="supplier.id" :name="supplier.name" :status="supplier.status" :checked-at="formatDate()"></Supplier>
            </li>
        </ul>
    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import {format} from "timeago.js";

    export default {
        name: "SuppliersList.vue",
        components: {
            Supplier,
        },
        data() {
            return {
                suppliers: []
            }
        },
        methods: {
            formatDate () {
               return format(this.checkedAt);
            }
        },
    }

</script>

<style scoped>
li {
    list-style-type: none;
}
.supplier {
    margin-bottom: 10px;
}

.red{
    color: red;
}
</style>