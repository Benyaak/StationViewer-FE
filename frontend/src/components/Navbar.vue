<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/home">Gas Station Viewer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
           <router-link :to="'/'" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/about'" class="nav-link">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="logout">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    },
  },
};
</script>

<style lang="scss">

</style>
