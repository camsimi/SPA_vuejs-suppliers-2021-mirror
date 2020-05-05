<template>
    <div class="supplier">
        <h2>Fournisseur {{ name }}</h2>
        <h3 v-bind:class="{ok : status, ko: !status}">
            <span v-if="status">A du stock ? OK</span>
            <span v-else>A du stock ? KO</span>
        </h3>
        <h5>Date de dernier relevé des stocks: {{ checkedAt }}</h5>
    </div>
</template>

<script>

    export default {
        name: "Supplier",
        props: {
            name: {
                type: String,
                default: "fournisseur"
            },
            status: {
                type: Boolean
            },
            checkedAt: {
                type: String,
            }
        }
    }
</script>

<style scoped>
.ok {
    color: green;
}

.ko {
    color: red;
}

.supplier {
    border-style: solid;
    border-color: grey;
}
</style>