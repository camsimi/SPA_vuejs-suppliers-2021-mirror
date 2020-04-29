<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier :name="name" :status="status" :checked-at="checkedAt"></Supplier>
    </div>
</template>

<script>
    import Supplier from "./Supplier";

    export default {
        name: "SuppliersList.vue",
        components: {
            Supplier,
        },
        data () {
            return {
                name: 'Raheem50',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date().toLocaleString("en-US",  {weekday: "short", month: "short", day: "numeric", year:"numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC"}) // date de la dernière mise à jour du stock
            }
        }
    }
</script>

<style scoped>

</style>