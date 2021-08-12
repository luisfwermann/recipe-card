import Api from "../api";

export const UserService = {
  async get() {
    return Api.get("user");
  }
};

export default UserService;
