import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List oximetria",
    `${Config.api}/lioxi?reg_inicio=${obj.pag.start}&reg_fin=${obj.pag.end}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/lioxi?reg_inicio=${obj.pag.start}&reg_fin=${obj.pag.end}`
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

async function getInfo(req, res) {
  const obj = JSON.parse(req.params.obj);
  let objs = {};
  return res.status(200).send(objs);
}

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("List oximetria count", `${Config.api}/paglioxi`);
  const response = await fetch(encodeURI(`${Config.api}/paglioxi`), {
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

async function getOximetria(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get oximetria", `${Config.api}/oxixidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/oxixidu?id=${obj.id}`),
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
  getCount,
  getInfo,
  getOximetria
};
