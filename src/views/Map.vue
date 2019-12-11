<template>
  <div class="map-container">
    <div id="map" style="height: 100%; width: 100%;"></div>
    <button class="fetch-bus-stops" @click="fetchBusStops">更新</button>

    <template v-if="showModal">
      <modal @close="showModal = false">
        <div slot="header">
          <h3>停留所から出発する路線の検索</h3>
        </div>
        <div slot="body">
          <div v-if="progressSircle">
            <div class="loader"></div>
          </div>
          <p v-else v-for="(route, index) in routes" :key="index">
            {{ route.long_name }}
          </p>
        </div>
        <div slot="footer">
          <p>目的のバス停まであと200m</p>
        </div>
      </modal>
    </template>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Modal from "../components/Modal.vue";

const apiKey = "";
const config = {
  headers: {
    apiKey
  }
};

const icon = L.icon({
  iconUrl: require("../assets/buscoll.png"),
  iconSize: [24, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -32]
});

export default {
  name: "BusMap",
  components: {
    Modal
  },
  data() {
    return {
      lat: 26.139474,
      lng: 127.76579,
      zoom: 16,
      map: undefined,
      showModal: false,
      progressSircle: false,
      routes: []
    };
  },
  mounted() {
    this.map = L.map("map").setView([this.lat, this.lng], this.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  },
  methods: {
    async fetchBusStops() {
      const uri = `https://api.ottop.org/transit/stops?origin_latitude=${this.lat}&origin_longitude=${this.lng}&distance=1`;
      const stops = await fetch(uri, config)
        .then(async response => {
          if (response.ok) {
            const json = await response.json();
            console.log(json);
            return json;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      this.plotStops(stops);
    },
    plotStops(stops) {
      if (!this.map) return;
      const markers = [];
      for (let i = 0; i < stops.length; i++) {
        markers[i] = L.marker([stops[i].lat, stops[i].lng], { icon })
          .addTo(this.map)
          .on("click", e => {
            this.fetchBusRoute(e.target.id);
          });
        const message = stops[i].name;
        markers[i].id = stops[i].id;
        markers[i].bindPopup(message, { autoClose: false }).openPopup();
      }
    },
    async fetchBusRoute(stopId) {
      this.showModal = true;
      this.progressSircle = true;
      const uri = `https://api.ottop.org/transit/stops/${stopId}/routes`;
      const route = await fetch(uri, config)
        .then(async response => {
          if (response.ok) {
            const json = await response.json();
            return json;
          }
        })
        .catch(function(error) {
          console.log(error);
          this.progressSircle = false;
        });
      console.log(route);
      this.routes = route;
      this.progressSircle = false;
    }
  }
};
</script>

<style scoped>
.map-container {
  height: 100vh;
  width: 100vw;
}

.fetch-bus-stops {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 500;
  padding: 1rem;
  background-color: #fff;
  font-size: 2rem;
}

.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
