<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <page-header/>
    <main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </main>
    
  </div>
</template>

<script>
/*eslint-disable */
import PageHeader from "@/components/Header";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
}
.container {
  padding: 24px 0;
}
</style>
