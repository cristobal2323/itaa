import fetch from "isomorphic-fetch";
import Config from "../config/";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);

  /* Dashborar Main  */
  console.log(req.session);

  console.log(
    `Dashboard Persons ${Config.api}/dsper?reg_inicio=${
      obj.pag.start
    }&reg_fin=${obj.pag.end}&ver_detalle=false}&comprador_id=${
      req.session.comprador_id
    }`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/dsper?reg_inicio=${obj.pag.start}&reg_fin=${
        obj.pag.end
      }&ver_detalle=false}&comprador_id=${req.session.comprador_id}`
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
  console.log("Dashboard perrsons count", `${Config.api}/pagdper`);
  const response = await fetch(encodeURI(`${Config.api}/pagdper`), {
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
