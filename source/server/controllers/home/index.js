import fetch from "isomorphic-fetch";
import Config from "../config/";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);

  /* Img */
  const response = await fetch(encodeURI(`${Config.api}/companias`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data = await response.json();
  const status = response.status;
  return res.status(status).send(data);
}

async function getGraph(req, res) {
  const obj = JSON.parse(req.params.obj);

  let id = "21";
  if (obj.id) {
    id = obj.id;
  }
  /* Img */
  console.log(`${Config.api}/valores?id=${id}&fecha_tope=null`);
  const response = await fetch(
    encodeURI(`${Config.api}/valores?id=${id}&fecha_tope=null`),
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
  get,
  getGraph
};
