const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const userMeRoute = API_ROUTES.USER_ME;

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
}
