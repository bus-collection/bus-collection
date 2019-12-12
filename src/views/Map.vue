<template>
  <div class="map-container">
    <div id="map" style="height: 100%; width: 100%;"></div>
    <!-- <button class="fetch-bus-stops" @click="fetchBusStops">更新</button> -->

    <template v-if="showModal">
      <modal @close="showModal = false">
        <div slot="header">
          <h3>{{ selectedStop.name }}</h3>
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
          <p v-if="enableShootingModal">目的のバス停まであと200m</p>
          <button v-else class="shoot" @click="shoot">撮影する</button>
        </div>
      </modal>
    </template>

    <template v-if="showShootingModal">
      <camera-modal @close="showShootingModal = false" @shooted="shooted">
      </camera-modal>
    </template>

    <template v-if="showGetPoint">
      <get-point @close="showGetPoint = false"></get-point>
    </template>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Modal from "../components/Modal.vue";
import CameraModal from "../components/CameraModal.vue";
import GetPoint from "../components/GetPoint.vue";

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

const collectedIcon = L.icon({
  iconUrl: require("../assets/buscoll_red.png"),
  iconSize: [24, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -32]
});

const meIcon = L.icon({
  iconUrl: require("../assets/me.png"),
  iconSize: [24, 24],
  iconAnchor: [18, 36],
  popupAnchor: [0, -32]
});

export default {
  name: "BusMap",
  components: {
    Modal,
    CameraModal,
    GetPoint
  },
  data() {
    return {
      lat: 26.139474,
      lng: 127.76579,
      zoom: 16,
      map: undefined,
      showModal: false,
      progressSircle: false,
      routes: [],
      enableShootingModal: false,
      showShootingModal: false,
      selectedStop: { name: 111, stopId: 111 },
      markers: [],
      showGetPoint: false
    };
  },
  mounted() {
    this.map = L.map("map").setView([this.lat, this.lng], this.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.fetchBusStops();
  },
  methods: {
    async fetchBusStops() {
      const uri = `https://api.ottop.org/transit/stops?origin_latitude=${this.lat}&origin_longitude=${this.lng}&distance=1`;
      const stops = await fetch(uri, config)
        .then(async response => {
          if (response.ok) {
            const json = await response.json();
            console.log(json.map(e => e.name).join("\n"));
            console.log(json);
            return json;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      this.plotStops(stops);
      this.plotMe();
    },
    plotStops(stops) {
      if (!this.map) return;
      this.markers = [];
      for (let i = 0; i < stops.length; i++) {
        this.markers[i] = L.marker([stops[i].lat, stops[i].lng], { icon })
          .addTo(this.map)
          .on("click", e => {
            this.fetchBusRoute(e.target.id, e.target.name);
          });
        const message = stops[i].name;
        this.markers[i].id = stops[i].id;
        this.markers[i].name = stops[i].name;
        this.markers[i].bindPopup(message, { autoClose: false }).openPopup();
      }
    },
    async fetchBusRoute(stopId, name) {
      this.selectedStop = {
        name: `${name}`,
        stopId: `${stopId}`
      };
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
      this.enableShootingModal = !this.enableShootingModal;
    },
    shoot() {
      this.showModal = false;
      this.progressSircle = false;
      this.showShootingModal = true;
    },
    shooted() {
      this.showShootingModal = false;
      // 撮影したバス停のアイコンの色を変更
      for (let i = 0; i < this.markers.length; i++) {
        if (this.markers[i].id === this.selectedStop.stopId) {
          const latlng = this.markers[i]._latlng;
          const marke = L.marker([latlng.lat, latlng.lng], {
            icon: collectedIcon
          })
            .addTo(this.map)
            .on("click", e => {
              this.fetchBusRoute(e.target.id, e.target.name);
            });
          const message = this.markers[i].name;
          marke.id = this.markers[i].id;
          marke.name = this.markers[i].name;
          marke.bindPopup(message, { autoClose: false }).openPopup();
          this.$set(this.markers, i, marke);
        }
      }

      // ポイントを取得したことを強調する
      this.showGetPoint = true;
    },
    plotMe () {
      const marke = L.marker([this.lat, this.lng], {
        icon: meIcon
      })
        .addTo(this.map);
      // const message = this.markers[i].name;
      // marke.id = this.markers[i].id;
      // marke.name = this.markers[i].name;
      // marke.bindPopup(message, { autoClose: false }).openPopup();
    }
  }
};
</script>

<style scoped>
.map-container {
  height: calc(100vh - 60px);
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

.shoot {
  border: 1px solid #ccc;
}
</style>
