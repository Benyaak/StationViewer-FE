<template>
  <div class="home container">
    <h1>Stations List</h1>
    <Station />
  </div>
</template>

<script>
import Station from '../components/Station.vue';

export default {
  name: 'home',
  components: {
    Station,
  },
};
</script>

<style lang="scss" scoped>

</style>
