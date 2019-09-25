import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List polisomnografia",
    `${Config.api}/lipsg?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/lipsg?reg_inicio=${obj.pag.start}&reg_fin=${
        obj.pag.end
      }&comprador_id=${req.session.comprador_id}`
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
  console.log(
    "List polisomnografia count",
    `${Config.api}/paglipsg?comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/paglipsg?comprador_id=${req.session.comprador_id}`
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

async function getPolisomnografia(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get polisomnografia", `${Config.api}/psgxidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/psgxidu?id=${obj.id}`),
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
  getPolisomnografia
};
