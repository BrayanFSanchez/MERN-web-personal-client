const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const menuRoute = API_ROUTES.MENU;

export class Menu {
  baseApi = BASE_API;

  async getMenu(active = undefined) {
    try {
      const url = `${this.baseApi}/${menuRoute}?active=${active}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createMenu(accessToken, data) {
    try {
      const url = `${this.baseApi}/${menuRoute}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateMenu(accessToken, idMenu, data) {
    try {
      const url = `${this.baseApi}/${menuRoute}/${idMenu}`;
      const params = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteMenu(accessToken, idMenu) {
    try {
      const url = `${this.baseApi}/${menuRoute}/${idMenu}`;
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
