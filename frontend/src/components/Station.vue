<template>
  <div>
    <ul>
      <li :key="item.key" v-for="item in stationCollection">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stationCollection: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();

    db.collection('stations').get().then((snap) => {
      const stationCollection = [];
      snap.forEach((station) => {
        stationCollection.push(station.data());
      });
      this.stationCollection = stationCollection;
    });
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
}
</style>
