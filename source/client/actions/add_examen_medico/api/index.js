import fetch from "isomorphic-fetch";

const API = {
  data: {
    async getInfo(obj) {
      let response = await fetch(
        `/api/examenMedicoInfo/${encodeURIComponent(JSON.stringify(obj))}`
      );

      const status = response.status;
      let data = await response.json();

      return {
        data,
        status
      };
    }
  }
};
export default API;
