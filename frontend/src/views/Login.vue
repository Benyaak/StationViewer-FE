<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" name="username" id="usernameInput" placeholder="Username" />
    <input type="password" name="password" id="passwordInput" placeholder="Password" />
    <button>Log In</button>
    <p>If you do not have an account, you can create one here</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
