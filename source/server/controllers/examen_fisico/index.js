import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List examen fisico",
    `${Config.api}/liexfi?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/liexfi?reg_inicio=${obj.pag.start}&reg_fin=${
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

  /* Estado civil */
  console.log("Listado de sueño examen fisico", `${Config.api}/licalsue`);
  const response = await fetch(encodeURI(`${Config.api}/licalsue`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data = await response.json();
  const status = response.status;

  objs.sueno = data.datos;

  return res.status(status).send(objs);
}

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List examen fisico count",
    `${Config.api}/pagliper?comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/pagliper?comprador_id=${req.session.comprador_id}`
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

async function getExamenFisico(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get examen fisico", `${Config.api}/exfixidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/exfixidu?id=${obj.id}`),
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
  getExamenFisico
};
