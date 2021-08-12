import axios from "axios";
import { API_URL } from "../config";

export const RecipeService = {
  async get() {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  }
};

export default RecipeService;
