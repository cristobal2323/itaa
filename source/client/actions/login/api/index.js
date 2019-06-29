import fetch from "isomorphic-fetch";

const API = {
  data: {
    async handleLogin(obj) {
      const response = await fetch(`/api/login/`, {
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
    },
    async handleRegister(obj) {
      const response = await fetch(`/api/register/`, {
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
    },
    async handleForget(obj) {
      const response = await fetch(`/api/forget/`, {
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
