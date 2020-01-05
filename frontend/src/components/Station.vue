<template>
  <div>
    <ul>
      <li :key="item.key" v-for="item in citiesCollection">{{item}}</li>
      <li :key="item.key" v-for="item in stationCollection">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citiesCollection: [],
      stationCollection: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    const self = this;
    async function getData(param) {
      const citiesRef = db.collection('cities');
      const cities = await citiesRef.get();

      cities.forEach(async (city) => {
        await citiesRef.doc(city.id).collection('stations').get().then((snapshot) => {
          param.citiesCollection.push(city.id);
          snapshot.forEach((station) => {
            param.stationCollection.push(station.data());
          });
        });
      });
    }

    getData(self);
  },
};
</script>

<style lang="scss">
ul {
  padding: 0;
  list-style: none;
}
</style>
