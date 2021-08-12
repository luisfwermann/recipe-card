import { reactive, readonly } from "vue";
import UserService from "../common/services/user.service";
import RecipeService from "../common/services/recipe.service";

const state = reactive({
  user: null,
  recipes: []
});

const methods = {
  init() {
    UserService.get().then((user) => methods.setUser(user));
    RecipeService.get().then((recipes) => methods.setRecipes(recipes));
  },
  setUser(user) {
    state.user = user;
  },
  setRecipes(recipes) {
    state.recipes = recipes;
  }
};

export default {
  state: readonly(state),
  methods
};
