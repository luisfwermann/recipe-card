import axios from "axios";
import axiosRetry from "axios-retry";

export const API_URL = "http://127.0.0.1:3000";

export const Api = {
  async get(resource) {
    axiosRetry(axios, {
      retries: 3,
      retryDelay: retryCount => retryCount * 500
    });

    try {
      const response = await axios.get(`${API_URL}/${resource}`);
      return response.data;
    } catch (error) {
      if (
        confirm(
          "Something went very wrong while consulting our API. Please, reload your page and try again."
        )
      ) {
        window.location.reload();
      }
    }
  }
};

export default Api;
