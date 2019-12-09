<template>
  <div class="sign-up">
    <p>Let's create a new account</p>
    <input type="text" name="email" id="emailInput" placeholder="E-Mail" />
    <input type="password" name="password" id="passwordInput" placeholder="Password" />
    <button>Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sign-up {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
