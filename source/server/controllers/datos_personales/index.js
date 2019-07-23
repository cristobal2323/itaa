import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List datos personales",
    `${Config.api}/liper?reg_inicio=${obj.pag.start}&reg_fin=${obj.pag.end}`
  );
  /* Img */
  const response = await fetch(
    encodeURI(
      `${Config.api}/liper?reg_inicio=${obj.pag.start}&reg_fin=${obj.pag.end}`
    ),
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

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("List datos personales count", `${Config.api}/pagliper`);
  /* Img */
  const response = await fetch(encodeURI(`${Config.api}/pagliper`), {
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

module.exports = {
  get,
  getCount
};
