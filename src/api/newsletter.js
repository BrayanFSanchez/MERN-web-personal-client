const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const newsletterRoute = API_ROUTES.NEWSLETTER;

export class Newsletter {
  baseApi = BASE_API;

  async getEmails(accessToken, page = 1, limit = 10) {
    try {
      const pageFilter = `page=${page}`;
      const limitFilter = `limit=${limit}`;

      const url = `${this.baseApi}/${newsletterRoute}?${pageFilter}&${limitFilter}`;

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
  async deleteEmail(accessToken, idEmail) {
    try {
      const url = `${this.baseApi}/${newsletterRoute}/${idEmail}`;
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
