const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const postRoute = API_ROUTES.POST;

export class Post {
  baseApi = BASE_API;

  async createPost(accessToken, data) {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.file) {
        formData.append("miniature", data.file);
      }

      const url = `${this.baseApi}/${postRoute}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 201) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPost(page = 1, limit = 10) {
    try {
      const pageFilter = `page=${page}`;
      const limitFilter = `limit=${limit}`;
      const url = `${this.baseApi}/${postRoute}?${pageFilter}&${limitFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updatePost(accessToken, idPost, data) {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.file) {
        formData.append("miniature", data.file);
      }

      const url = `${this.baseApi}/${postRoute}/${idPost}`;
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

  async deletePost(accessToken, idPost) {
    try {
      const url = `${this.baseApi}/${postRoute}/${idPost}`;
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
