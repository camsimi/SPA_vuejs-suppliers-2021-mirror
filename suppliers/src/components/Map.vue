<template>
    <div class="map">
        <l-map
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="supplier in $store.state.suppliers" :key="supplier.id" :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


    export default {
        name: "Map",
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        props: {
            supplier: []
        },
        data () {
            return {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                zoom: 4.5,
                center: [47.413220, -1.219482],
                markerLatLng: [47.313220, -1.319482],
                // suppliers: [
                    // {
                    //     id: 1,
                    //     latitude: 10,
                    //     longitude: 10
                    // },
                    // {
                    //     id: 2,
                    //     latitude: 11,
                    //     longitude: 9.6
                    // }
                // ]
            };
        },
        methods: {
            zoomUpdated (zoom) {
                this.zoom = zoom;
            },
            centerUpdated (center) {
                this.center = center;
            },
            // latLngUpdated (markerLatLng) {
            //     this.markerLatLng = markerLatLng;
            // }
        },
        // mounted: function () {
        //     this.loading = true;
        //     axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
        //         .then(resolve => {
        //             this.loading = false;
        //             this.suppliers = resolve.data;
        //             // this.suppliers.id = resolve.data.id;
        //             // this.suppliers.latitude = resolve.data.latitude;
        //             // this.suppliers.longitude = resolve.data.longitude;
        //         })
        //         .catch((error) => {
        //             this.loading = false;
        //             this.error = error;
        //             return this.error;
        //         })
        // }
    }
</script>

<style scoped>
    .map {
        height: 350px;
        width: auto;
        margin: 0 200px 100px 200px;
    }
</style>