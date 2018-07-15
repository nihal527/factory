<template>
<div id="app">
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <div class="white elevation-2">
            <v-toolbar flat dense class="green" dark>
              <v-toolbar-title>Kayıt</v-toolbar-title>
            </v-toolbar>
            <div>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Name"
                  required
                ></v-text-field>
                <input type="email" name="email" placeholder="email" v-model="email"><br>
                <input type="password" name="password" placeholder="password" v-model="password"><br>
                <div class="error" v-html="error"></div>
                <v-btn class="blue-grey lighten-2" @click="register">Register</v-btn>
              </v-form>
            </div>
          </div>
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
  <!-- <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Kayıt</v-toolbar-title>
        </v-toolbar>
      
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" placeholder="email" v-model="email"><br>
          <input type="password" name="password" placeholder="password" v-model="password"><br>
          <div class="error" v-html="error"></div>
          <button @click="register">Register</button>
        </div>
      </div>
    </v-flex>
  </v-layout> -->

  <!--  -->
</template>

<script>
/*eslint-disable */
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      error: null
    };
  },
  watch: {
    email(value) {
      console.log("email : ", value);
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
