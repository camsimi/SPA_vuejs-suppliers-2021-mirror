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
                center: [31.224361, 121.469170],
                markerLatLng: [47.313220, 50.319482],
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
        created() {
            navigator.geolocation.getCurrentPosition((position) => {
               return this.center = [position.coords.latitude, position.coords.longitude];
            });
        }
    }
</script>

<style scoped>
    .map {
        height: 350px;
        width: auto;
        margin: 0 200px 100px 200px;
    }
</style>