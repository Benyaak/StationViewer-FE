<template>
  <div class="home">
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
