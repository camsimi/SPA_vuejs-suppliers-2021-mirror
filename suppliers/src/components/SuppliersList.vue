<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <ul v-for="supplier in suppliers" :key="supplier.name">
        <li>
            <Supplier :name="supplier.name" :status="supplier.status" :checked-at="formatDate()"></Supplier>
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
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1 ?",
                        status: true,
                        checkedAt: new Date().toLocaleString("en-US",  {weekday: "short", month: "short", day: "numeric", year:"numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC"})
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date()
                    }
                ],
            }
        },
        methods: {
            formatDate () {
               return format(this.checkedAt);
            }
        }
    }

</script>

<style scoped>
li {
    list-style-type: none;
}
</style>