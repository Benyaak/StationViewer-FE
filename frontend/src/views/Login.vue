<template>
    <div class="container" id="login" v-if="!authenticated">
      <div class="d-flex justify-content-center">
      <form>
        <div class="form-group">
          <label for="emailInput">Email address</label>
          <input type="email" class="form-control" v-model="input.email"
            id="emailInput" placeholder="Email Address">
        </div>

        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" v-model="input.password"
            id="passwordInput" placeholder="Password">
        </div>

        <button type="button" v-on:click="login()" class="btn btn-primary">Login</button>
      </form>
      </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
import toastr from 'toastr';

export default {
  name: 'Login',
  data() {
    return {
      input: {
        email: '',
        password: '',
      },
      authenticated: false,
    };
  },
  methods: {
    login() {
      const api = axios.create({
        withCredentials: true,
      });
      if (this.input.email !== '' && this.input.password !== '') {
        api
          .post('http://localhost:3000/api/auth/login', {
            email: this.input.email,
            password: this.input.password,
          })
          .then((response) => {
            toastr.success(response.data.message);
            Cookies.set('user-logIn', '1', { expires: 1 / 12 });
            this.$root.$emit('logged', true);
            this.$router.replace({ name: 'Home' });
          })
          .catch((err) => {
            toastr.error(err.response.data.message);
          });
      }
    },
  },
  beforeCreate() {
    this.authenticated = Cookies.get('user-logIn') === '1';
    if (this.authenticated) this.$router.replace({ name: 'Home' });
  },
};
</script>

<style scoped>
</style>
