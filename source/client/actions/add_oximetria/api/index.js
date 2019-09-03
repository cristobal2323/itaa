import fetch from "isomorphic-fetch";

const API = {
  data: {
    async getInfo(obj) {
      let response = await fetch(
        `/api/oximeInfo/${encodeURIComponent(JSON.stringify(obj))}`
      );

      const status = response.status;
      let data = await response.json();

      return {
        data,
        status
      };
    },
    async handleSubmit(obj) {
      const response = await fetch(`/api/oximetria/`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify(obj)
      });
      let status = response.status;
      let data = await response.json();
      return { data, status };
    }
  }
};
export default API;
