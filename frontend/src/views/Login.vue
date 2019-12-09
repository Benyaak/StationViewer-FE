<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" name="username" id="usernameInput" placeholder="Username" />
    <input type="password" name="password" id="passwordInput" placeholder="Password" />
    <button @click="login">Log In</button>
    <p>
      If you do not have an account, you can create one
      <router-link to="/sign-up">here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.replace('home');
    },
  },
};
</script>

<style lang="scss" scoped>
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
