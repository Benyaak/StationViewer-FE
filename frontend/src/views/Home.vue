<template>
  <div class="home">
    <h1>Stations List</h1>
    <button @click="logout">Logout</button>
    <Station />
  </div>
</template>

<script>
import firebase from 'firebase';
import Station from '../components/Station.vue';

export default {
  name: 'home',
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    },
  },
  components: {
    Station,
  },
};
</script>
