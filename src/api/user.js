const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const userMeRoute = API_ROUTES.USER_ME;
const userRoute = API_ROUTES.USER;
const usersRoute = API_ROUTES.USERS;

export class User {
  baseApi = BASE_API;

  async getMe(accessToken) {
    try {
      const url = `${this.baseApi}/${userMeRoute}`;
      const params = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createUser(accessToken, data) {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      const url = `${this.baseApi}/${userRoute}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUsers(accessToken, active = undefined) {
    try {
      const url = `${this.baseApi}/${usersRoute}?active=${active}`;
      const params = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(accessToken, idUser, userData) {
    try {
      const data = userData;
      if (!data.password) delete data.password;

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      const url = `${BASE_API}/${userRoute}/${idUser}`;
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(accessToken, idUser) {
    try {
      const url = `${this.baseApi}/${userRoute}/${idUser}`;
      const params = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
