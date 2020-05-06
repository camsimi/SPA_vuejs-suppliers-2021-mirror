<template>
    <div>
        <h2>Ajouter un fournisseur</h2>
        <form>
            <p>Saisir un nom:</p>
            <input v-model="name">
            <p>Saisir un statut:</p>
            <input v-model="status" name="status">
            <p>Saisir une latitude :</p>
            <input v-model="latitude">
            <p>.. et une longitude :</p>
            <input v-model="longitude">
            <br>
            <br>
            <button @click="validateSupplier">Ajouter un fournisseur</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "addSupplier",
        data() {
            return {
                name: "",
                status: "",
                checkedAt: new Date(),
                longitude: "",
                latitude: ""
            }
        },
        methods: {
            validateSupplier() {
                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: this.name,
                    checkedAt: this.checkedAt,
                    status: this.status,
                    latitude: this.latitude,
                    longitude: this.longitude
                })
                // .then(resolve => {
                //     console.log(resolve)
                // })
                // .catch(rejected => {
                //     console.log(rejected)
                // })
            }
        },
    }
</script>

<style scoped>

</style>