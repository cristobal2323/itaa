import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "Listado examen medico",
    `${Config.api}/liexme?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/liexme?reg_inicio=${obj.pag.start}&reg_fin=${
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

  return res.status(200).send({});
}

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List examen medico count",
    `${Config.api}/pagliexfi?comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/pagliexfi?comprador_id=${req.session.comprador_id}`
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

async function getExamenMedico(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get examen medico", `${Config.api}/exmexidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/exmexidu?id=${obj.id}`),
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
  getExamenMedico
};
