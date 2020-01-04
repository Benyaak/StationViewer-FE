/* eslint-disable no-console */
/* eslint-disable */
<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" name="username" v-model="email" id="usernameInput" placeholder="Username" />
    <input
      type="password"
      name="password"
      v-model="password"
      id="passwordInput"
      placeholder="Password"
    />
    <button @click="login">Log In</button>
    <p>or Sign In with Google</p>
    <button class="social-button" @click="socialLogin">
      <img alt="Google Button" src="../assets/google-logo.png" />
    </button>
    <p>
      If you do not have an account, you can create one
      <router-link to="/sign-up">here</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user);
            this.$router.replace('home');
          },
          (err) => {
            throw err;
          },
        );
    },

    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          this.$router.replace('home');
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang='scss' scoped>
.social-button {
  border: none;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

input {
  margin: 5px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
