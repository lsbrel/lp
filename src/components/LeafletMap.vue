<script>
import Leaflet from "leaflet";
import Loading from "./Loading.vue";
import Icone from "@/icons/markers/red_marker.svg";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      map: undefined,
      icons: [],
      markers: [],
    };
  },
  methods: {
    createMap() {
      this.map = Leaflet.map("map").setView([-24.0855, -54.2569], 15);
      const tileLayer = Leaflet.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(this.map);
    },
    addMaker() {
      const marker = Leaflet.marker([-24.0855, -54.2569], {
        icon: this.icons[0],
        title: "teste",
        draggable: true,
      }).addTo(this.map);

      marker.on("moveend", function (move) {
        console.log(move.sourceTarget._latlng);
      });
    },

    createPolyLine() {
      var latlngs = [
        [45.51, -122.68],
        [37.77, -122.43],
        [34.04, -118.2],
      ];

      var polyline = L.polyline(latlngs, { color: "red" }).addTo(map);
    },
    createIcon() {
      this.icons[0] = Leaflet.icon({
        iconUrl: Icone,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });
    },
  },
  mounted() {
    this.createIcon();
    this.createMap();
    this.addMaker();
  },
};
</script>
<template>
  <div id="map" class="h-full w-full p-3 mt-4 shadow-lg rounded-lg"><Loading /></div>
</template>
