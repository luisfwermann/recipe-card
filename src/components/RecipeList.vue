<template>
  <div class="r-list">
    <div v-for="recipe in store.state.recipes" :key="recipe.id">
      <recipe-card
        class="r-list__card"
        :recipe="recipe"
        @click="onClickCard"
      ></recipe-card>
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
import RecipeCard from "./RecipeCard.vue";

export default {
  components: { RecipeCard },
  setup() {
    return {
      store: inject("store")
    };
  },
  methods: {
    onClickCard(recipe) {
      console.log(recipe.title);
    }
  }
};
</script>

<style lang="scss">
.r-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1em;

  .r-list__card {
    width: 343px;
    margin-bottom: 1em;
  }

  @media only screen and (min-width: 400px) {
    .r-list__card {
      margin-right: 1em;
    }
  }
}
</style>
