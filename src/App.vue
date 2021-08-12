<template>
  <div id="app">
    <h1>My Recipes</h1>
    <recipe-list></recipe-list>
  </div>
</template>

<script>
import { provide } from "@vue/runtime-core";
import RecipeList from "./components/RecipeList.vue";
import store from "./store";

export default {
  components: {
    RecipeList
  },
  setup() {
    store.methods.init();
    provide("store", store);
  }
};
</script>

<style>
body {
  background-color: #e4e4e4;
  margin: 0;
}

#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
