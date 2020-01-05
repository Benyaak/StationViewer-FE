<template>
  <div class="products">
    <div class="card">
      <div class="card-header">
        Add a new station
      </div>
      <div class="card-body">
        <form class="form" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>Station Name</label>
            <input v-model="stationData.stationName" type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Station Prices</label>
            <input v-model="stationData.stationPrices" type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Station List -->
    <div class="card mt-5">
      <div class="card-header">
        Stations List
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">
                Station Name
              </th>
              <th>
                Station Prices
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="station in sortedStations" v-bind:key="station.stationId">
              <template v-if="editId === station.stationId">
                <td>{{editStationData.stationId}}</td>
                <td><input v-model="editStationData.stationName" type="text"></td>
                <td><input v-model="editStationData.stationPrices" type="text"></td>
                <td>
                    <span class="icon">
                      <i @click="onEditSubmit(station.stationId)" class="fa fa-check"></i>
                    </span>
                  <span class="icon">
                      <i @click="onCancel" class="fa fa-ban"></i>
                    </span>
                </td>
              </template>
              <template v-else>
                <td>
                  {{station.stationName}}
                </td>
                <td>
                  {{station.stationPrices}}
                </td>
                <td>

                  <a href="#" class="icon">
                    <i @click="onDelete(station.stationId)" class="fa fa-trash"></i>
                  </a>
                  <a href="#" class="icon">
                    <i @click="onEdit(station)" class="fa fa-pencil"></i>
                  </a>
                  <router-link
                    :to="{
                      name:'stationPage',
                      params: { stationId: station.stationId }
                    }"
                    class="icon"
                  >
                    <i class="fa fa-eye"></i>
                  </router-link>
                </td>
              </template>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import toastr from 'toastr';

export default {
  data() {
    return {
      editId: '',
      stationData: {
        stationId: null,
        stationName: '',
        stationPrices: [],
      },
      editStationData: {
        stationId: null,
        stationName: '',
        stationPrices: [],
      },
      stations: [],
      cities: [],
    };
  },
  created() {
    this.getStations();
  },
  computed: {
    sortedStations() {
      return this.stations.slice().sort((a, b) => a.id - b.id);
    },
  },
  mounted() {
  },
  methods: {
    getStations() {
      const db = this.$firebase.firestore();
      const self = this;
      async function getData(param) {
        const citiesRef = db.collection('cities');
        const cities = await citiesRef.get();

        cities.forEach(async (city) => {
          await citiesRef.doc(city.id).collection('stations').get().then((snapshot) => {
            param.cities.push(city.id);
            snapshot.forEach((station) => {
              param.stations.push(station.data());
            });
          });
        });
      }
      getData(self);
    },
    onSubmit() {
      const api = axios.create({
        withCredentials: true,
      });
      api.post('http://localhost:8080/api/stations', this.stationData)
        .then((response) => {
          toastr.success(response.data.message);
          this.stationData.stationId = null;
          this.stationData.stationName = '';
          this.stationData.stationPrices = [];
          this.getStations();
        })
        .catch((error) => {
          toastr.error(error.response.data.message);
        });
    },
    onDelete(id) {
      const api = axios.create({
        withCredentials: true,
      });
      api.delete(`http://localhost:8080/api/stations/${id}`)
        .then((response) => {
          toastr.success(response.data.message);
          this.getStations();
        })
        .catch((error) => {
          toastr.error(error.response.data.message);
        });
    },
    onEdit(station) {
      this.editId = station.stationId;
      this.stationData.id = station.stationId;
      this.stationData.title = station.stationName;
      this.stationData.description = station.stationPrices;
    },
    onCancel() {
      this.editId = null;
      this.stationData.stationId = null;
      this.stationData.stationName = '';
      this.stationData.stationPrices = [];
    },
    onEditSubmit(id) {
      const api = axios.create({
        withCredentials: true,
      });
      if (this.editStationData.stationName && this.editStationData.stationPrices) {
        api.put(`http://localhost:8080/api/stations/${id}`, {
          stationName: this.editStationData.stationName,
          stationPrices: this.editStationData.stationPrices,
        })
          .then((response) => {
            toastr.success(response.data.message);
            this.getStations();
            this.editId = null;
            this.editStationData.stationId = null;
            this.editStationData.stationName = '';
            this.editStationData.stationPrices = [];
          });
      }
    },
  },
};
</script>

<style lang="scss">
.list-container {
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style: none;
}

.home {
  display: flex;
  flex-direction: column;
}
</style>
