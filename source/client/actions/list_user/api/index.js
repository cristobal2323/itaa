import fetch from "isomorphic-fetch";

const API = {
  data: {
    async get(obj) {
      let response = await fetch(
        `/api/user/${encodeURIComponent(JSON.stringify(obj))}`
      );

      const status = response.status;
      let data = await response.json();

      return {
        data,
        status
      };
    },
    async deleteEntidad(obj) {
      const response = await fetch(`/api/user/${JSON.stringify(obj)}`, {
        method: "DELETE"
      });
      const status = response.status;
      const data = await response.json();
      return { data: data, status: status };
    }
  }
};
export default API;