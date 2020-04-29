<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier></Supplier>
    </div>
</template>

<script>
    import Supplier from "./Supplier";

    export default {
        name: "SuppliersList.vue",
        components: {
            Supplier,
        }
    }
</script>

<style scoped>

</style>