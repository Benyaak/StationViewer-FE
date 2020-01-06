<template>
  <div class="products">
    <div class="card">
      <div class="card-header">
        Add a new station
      </div>
      <div class="card-body">
        <form class="form" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>City Name</label>
            <input v-model="stationData.stationCity" type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Station Name</label>
            <input v-model="stationData.stationName" type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Station Prices</label>
            <input v-model="stationData.stationPrices" type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2">
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-success my-2">Add</button>
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
                City
              </th>
              <th scope="col">
                Station Name
              </th>
              <th>
                Station Prices
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="station in sortedStations"
              v-bind:key="station.stationData.stationId">
              <template v-if="editId === station.stationData.stationId">
                <td>
                  <input v-model="editStationData.stationCity" type="text"
                    :placeholder="station.stationData.stationCity">
                </td>
                <td>
                  <input v-model="editStationData.stationName" type="text"
                    :placeholder="station.stationData.stationName">
                </td>
                <td>
                  <input v-model="editStationData.stationPrices" type="text"
                    :placeholder="station.stationData.stationPrices">
                </td>
                <td>
                    <span class="icon">
                      <i @click="onEditSubmit(
                        station.stationData.stationCity,
                        station.stationData.stationName
                        )" class="fa fa-check"></i>
                    </span>
                  <span class="icon">
                      <i @click="onCancel" class="fa fa-ban"></i>
                    </span>
                </td>
              </template>
              <template v-else>
                <td>
                  {{station.stationData.stationCity}}
                </td>
                <td>
                  {{station.stationData.stationName}}
                </td>
                <td>
                  {{station.stationData.stationPrices}}
                </td>
                <td>
                  <a href="#" class="icon mr-1">
                    <i @click="onEdit(station.stationData)" class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="icon">
                    <i @click="onDelete(
                      station.stationData.stationCity,
                      station.stationIds,
                      sortedStations
                      )"
                      class="fa fa-trash"></i>
                  </a>
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
      editId: null,
      stationData: {
        stationId: null,
        stationName: '',
        stationPrices: [],
        stationCity: '',
      },
      editStationData: {
        stationId: null,
        stationName: '',
        stationPrices: [],
        stationCity: '',
      },
      cityData: {
        cityId: '',
      },
      stationIds: [],
      stations: [],
      cities: [],
    };
  },
  created() {
    this.getStations();
  },
  computed: {
    sortedStations() {
      return this.stations.map((stations, i) => ({
        stationIds: this.stationIds[i],
        stationData: this.stations[i],
      }));
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
              param.stationIds.push(station.id);
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
      this.stationData.stationPrices = this.stationData.stationPrices.split(',').map(Number);
      api.post('http://localhost:3000/api/cities/', this.stationData)
        .then((response) => {
          toastr.success(response.data.message);
          // eslint-disable-next-line no-plusplus
          this.stationData.stationCity = '';
          this.stationData.stationName = '';
          this.stationData.stationPrices = [];
        })
        .catch((error) => {
          toastr.error(error.response.data.message);
        });
    },
    onDelete(cityId, stationId) {
      const api = axios.create({
        withCredentials: true,
      });
      api.delete(`http://localhost:3000/api/cities/${cityId}/${stationId}`)
        .then((response) => {
          toastr.success(response.data.message);
        })
        .catch((error) => {
          toastr.error(error.response.data.message);
        });
    },
    onEdit(station) {
      this.editId = station.stationId;
      this.editStationData.stationCity = station.stationCity;
      this.editStationData.stationName = station.stationName;
      this.editStationData.description = station.stationPrices;
    },
    onCancel() {
      this.editId = null;
      this.stationData.stationCity = '';
      this.stationData.stationName = '';
      this.stationData.stationPrices = [];
    },
    onEditSubmit(stationCity, stationName) {
      const api = axios.create({
        withCredentials: true,
      });
      if (this.editStationData.stationName && this.editStationData.stationPrices) {
        api.put(`http://localhost:3000/api/cities/${stationCity}/${stationName}`, this.editStationData)
          .then((response) => {
            toastr.success(response.data.message);
            this.editId = null;
            this.editStationData.stationCity = '';
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

a {
  color: #42b983;
}
</style>
