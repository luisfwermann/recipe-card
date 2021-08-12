import Api from "../api";

export const RecipeService = {
  async get() {
    return Api.get("recipes");
  }
};

export default RecipeService;
