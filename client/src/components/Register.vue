<template>
<div id="app">
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <div class="white elevation-2">
            <v-toolbar flat dense dark class="register-header">
              <v-toolbar-title>Kayıt</v-toolbar-title>
            </v-toolbar>
            <div>
              <div id="app">
                <img src="../assets/nbglogo.jpg"> 
              </div>
              <v-form ref="form" lazy-validation class="registerForm">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'visibility_off' : 'visibility'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="password"
                  label="Şifre"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></v-text-field>
                <!-- <input type="email" name="email" placeholder="email" v-model="email"><br> -->
                <!-- <input type="password" name="password" placeholder="password" v-model="password"><br> -->
                <div class="error" v-html="error"></div>
                <v-btn class="blue-grey lighten-4" @click="register">Register</v-btn>
                <v-btn class="blue-grey lighten-4" @click="clear">clear</v-btn>
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
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      show: false,
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
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.registerForm {
  padding: 0 24px 24px 24px;
}
#app {
  margin: 0;
}
.register-header {
  display: flex;
  justify-content: center;
  background-color: #29c15d !important;
}
</style>
