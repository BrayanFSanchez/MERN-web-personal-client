const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);
const JWT = JSON.parse(process.env.REACT_APP_JWT);

const access = JWT.ACCESS;
const refresh = JWT.REFRESH;

const registerRoute = API_ROUTES.REGISTER;
const loginRoute = API_ROUTES.LOGIN;
const refreshAccessToken = API_ROUTES.REFRESH_ACCESS_TOKEN;

export class Auth {
  baseApi = BASE_API;

  async register(data) {
    try {
      const url = `${this.baseApi}/${registerRoute}`;

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    try {
      const url = `${this.baseApi}/${loginRoute}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async refreshAccessToken(refreshToken) {
    try {
      const url = `${this.baseApi}/${refreshAccessToken}`;
      console.log(url);

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      };
      console.log(params);

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  setAccessToken(token) {
    localStorage.setItem(access, token);
  }

  getAccessToken() {
    return localStorage.getItem(access);
  }

  setRefreshToken(token) {
    localStorage.setItem(refresh, token);
  }

  getRefreshToken() {
    return localStorage.getItem(refresh);
  }

  removeTokens() {
    localStorage.removeItem(access);
    localStorage.removeItem(refresh);
  }
}
