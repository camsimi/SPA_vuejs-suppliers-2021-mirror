<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <br>
    <Helloworld msg="Que voulez vous faire?"/>
    <router-link class="link" to="suppliers">Voir la liste des fournisseurs</router-link>
    <router-link class="link" to="map">Voir la carte</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Helloworld from "./components/Helloworld";

export default {
  name: 'App',
  components: {
    Helloworld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  background-color: #42b983;
  border-style: none;
  margin: 10px;
  padding: 13px 15px;
}
</style>

