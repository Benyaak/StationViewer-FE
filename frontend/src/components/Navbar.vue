<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Gas Station Viewer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active" v-if="authenticated">
           <router-link :to="'/'" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="authenticated">
          <router-link :to="'/about'" class="nav-link">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0"
          v-if="authenticated" @click="logout()">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  name: 'Navbar',
  data() {
    return {
      authenticated: false,
    };
  },
  beforeMount() {
    this.authenticated = Cookies.get('user-logIn') === '1';
  },
  mounted() {
    this.$root.$on('logged', (logged) => {
      this.authenticated = logged;
    });
  },
  methods: {
    logout() {
      const api = axios.create({
        withCredentials: true,
      });
      api.post('http://localhost:3000/api/auth/logout')
        .then(() => {
          Cookies.set('user-logIn', '0', { expires: 1 / 12 });
          this.authenticated = false;
          this.$router.replace({ name: 'Login' });
        });
    },
  },
};
</script>

<style lang="scss">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
