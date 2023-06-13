// const SERVER_IP = process.env.REACT_APP_SERVER_IP;
// const BASE_PATH = process.env.REACT_APP_BASE_PATH;
const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const registerRoute = API_ROUTES.REGISTER;

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
}
