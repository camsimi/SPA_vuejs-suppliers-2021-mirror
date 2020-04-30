<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <div class="map">
        <l-map
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
        </l-map>
        </div>
    </div>
</template>

<script>
    import { LMap, LTileLayer } from 'vue2-leaflet';

    export default {
        name: "SuppliersMap",
        components: {
            LMap,
            LTileLayer
        },
        data () {
            return {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                zoom: 4.5,
                center: [47.413220, -1.219482],
            };
        },
        methods: {
            zoomUpdated (zoom) {
                this.zoom = zoom;
            },
            centerUpdated (center) {
                this.center = center;
            },
        }
    }
</script>

<style scoped>
    .map {
        height: 350px;
        width: auto;
        margin: 0 200px;
    }

</style>