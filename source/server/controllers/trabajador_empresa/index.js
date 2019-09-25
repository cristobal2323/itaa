import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List trabajador empresa",
    `${Config.api}/litrab?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/litrab?reg_inicio=${obj.pag.start}&reg_fin=${
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

  /* empresa */
  console.log(
    "Nombre empresa trabajador empresa",
    `${Config.api}/liempr?comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(`${Config.api}/liempr?comprador_id=${req.session.comprador_id}`),
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

  /* Sexo */
  console.log(
    "Tipo empresa",
    `${Config.api}/lititur?comprador_id=${req.session.comprador_id}`
  );
  const response1 = await fetch(
    encodeURI(`${Config.api}/lititur?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data1 = await response1.json();
  const status1 = response1.status;

  /* Rubro*/
  console.log(
    "Rubro trabajador empresa",
    `${Config.api}/lirubr?comprador_id=${req.session.comprador_id}`
  );
  const response2 = await fetch(
    encodeURI(`${Config.api}/lirubr?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data2 = await response2.json();
  const status2 = response2.status;

  /* Cargo */
  console.log(
    "Cargo trabajador empresa",
    `${Config.api}/licarg?comprador_id=${req.session.comprador_id}`
  );
  const response3 = await fetch(
    encodeURI(`${Config.api}/licarg?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data3 = await response3.json();
  const status3 = response3.status;

  /* Area */
  console.log(
    "Area trabajador empresa",
    `${Config.api}/liareas?comprador_id=${req.session.comprador_id}`
  );
  const response4 = await fetch(
    encodeURI(`${Config.api}/liareas?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data4 = await response4.json();
  const status4 = response4.status;

  /* Horario */
  console.log(
    "Horario trabajador empresa",
    `${Config.api}/lihorar?comprador_id=${req.session.comprador_id}`
  );
  const response5 = await fetch(
    encodeURI(`${Config.api}/lihorar?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data5 = await response5.json();
  const status5 = response5.status;

  /* Estructura */
  console.log(
    "Estructura trabajador empresa",
    `${Config.api}/liestur?comprador_id=${req.session.comprador_id}`
  );
  const response6 = await fetch(
    encodeURI(`${Config.api}/liestur?comprador_id=${req.session.comprador_id}`),
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        accept: "application/json"
      })
    }
  );

  const data6 = await response6.json();
  const status6 = response6.status;

  objs.empresa = data.datos;
  objs.tipo = data1.datos;
  objs.rubro = data2.datos;
  objs.cargo = data3.datos;
  objs.area = data4.datos;
  objs.horario = data5.datos;
  objs.estructura = data6.datos;

  return res.status(status).send(objs);
}

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List trabajador empresa count",
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

async function getTrabajadorEmpresa(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get trabajador empresa", `${Config.api}/trabxidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/trabxidu?id=${obj.id}`),
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
  getTrabajadorEmpresa
};
