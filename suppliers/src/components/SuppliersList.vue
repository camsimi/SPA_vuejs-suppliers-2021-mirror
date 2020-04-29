<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <ul v-for="supplier in suppliers" :key="supplier.name">
        <li>
            <Supplier :name="supplier.name" :status="supplier.status" :checked-at="supplier.checkedAt"></Supplier>
        </li>
        </ul>
    </div>
</template>

<script>
    import Supplier from "./Supplier";

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
                        checkedAt: new Date()
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date()
                    }
                ]
            }
        }
    }

</script>

<style scoped>
li {
    list-style-type: none;
}
</style>