import axios from "axios";
import { API_URL } from "../config";

export const UserService = {
  async get() {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  }
};

export default UserService;
