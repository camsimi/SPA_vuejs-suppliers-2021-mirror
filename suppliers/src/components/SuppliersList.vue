<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <select name="suppliers-select" v-model="selected">
            <option value="ok">ok</option>
            <option value="ko">ko</option>
            <option value="*">*</option>
        </select>

        <ul>
            <li class="supplier-list">
                <Supplier v-for="supplier in chooseSuppliers()" :key="supplier.id" :name="supplier.name" :status="supplier.status" :checked-at="formatDate()"></Supplier>
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
                suppliers: [],
                selected: "",
            }
        },
        methods: {
            formatDate() {
                return format(this.checkedAt);
            },
            chooseSuppliers() {
                if (this.selected === "*") {
                    return this.$store.getters.pickSuppliers;
                } else if (this.selected === "ok") {
                    return this.$store.getters.pickSuppliers.filter(supplier => supplier.status === true);
                } else if (this.selected === "ko") {
                    return this.$store.getters.pickSuppliers.filter(supplier => supplier.status === false);
                }
            },
        }
            // filterOk(){
            //     return supplier.filter(supplier.status === "ok");
            // },
            // filterKo(){
            //     return supplier.filter(supplier.status === "ko");
            // },
            // filterA(){
            //     return supplier.filter(supplier.status === "*");
            // },
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