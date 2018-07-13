<template>
  <div>
      <h1>Register page</h1>
      <input type="email" name="email" placeholder="email" v-model="email"><br>
      <input type="password" name="password" placeholder="password" v-model="password"><br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
/*eslint-disable */
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  watch: {
    email(value) {
      console.log("email : ", value);
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
