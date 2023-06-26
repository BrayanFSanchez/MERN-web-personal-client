const BASE_API = process.env.REACT_APP_BASE_API;
const API_ROUTES = JSON.parse(process.env.REACT_APP_API_ROUTES);

const courseRoute = API_ROUTES.COURSE;

export class Course {
  baseApi = BASE_API;

  async createCourse(accessToken, data) {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.file) {
        formData.append("miniature", data.file);
      }

      const url = `${(this, this.baseApi)}/${courseRoute}`;
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

  async getCourses(params) {
    try {
      const pageFilter = `page=${params?.page || 1}`;
      const limitFilter = `limit=${params?.limit || 10}`;
      const url = `${this.baseApi}/${courseRoute}?${pageFilter}&${limitFilter}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
