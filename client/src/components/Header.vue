<template>
    <v-toolbar fixed class="header">
        <v-toolbar-title dark>
            <div class="header-img">
                <!-- <div><img class="logo" src="../assets/nbglogo.jpg"> </div> -->
                <span class="name-button" @click="navigateTo({name: 'root'})">NBG ÇORAP</span>
            </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat class="sign-up" @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn flat class="sign-up" @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
        </v-toolbar-items>
        
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>
<style scope>
.v-toolbar__title {
  color: aliceblue;
}
.logo {
  width: 70px;
  height: 50px;
  margin-right: 12px;
}
.header-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  background-color: #29c15d;
}
.sign-up {
  color: aliceblue;
}
.name-button {
  cursor: pointer;
}
.name-button:hover {
  color: #cfd8dc;
}
</style>

