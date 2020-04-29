<template>
    <div>
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
        data () {
            return {
                name: 'Raheem50',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date().toLocaleString("en-US",  {weekday: "short", month: "short", day: "numeric", year:"numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC"}) // date de la dernière mise à jour du stock
            }
        }
    }
   // export const supplier = new Vue ({
   //     el: "app",
   //      data: {
   //          name: 'Mon fournisseur',
   //          status: false, // est ce qu'il y a du stock
   //          checkedAt: new Date() // date de la dernière mise à jour du stock
   //      }
   //  })


</script>

<style scoped>
.ok {
    color: green;
}

.ko {
    color: red;
}
</style>