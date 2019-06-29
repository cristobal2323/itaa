import fetch from "isomorphic-fetch";
import Config from "../config/";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(req.session.token);

  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/user.json?email=${obj.user}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data = await response.json();
  const status = response.status;
  return res.status(status).send(data);
}

module.exports = {
  get
};
