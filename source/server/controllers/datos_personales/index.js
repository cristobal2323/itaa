import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List datos personales",
    `${Config.api}/liper?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/liper?reg_inicio=${obj.pag.start}&reg_fin=${
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
  console.log("Estado civil datos personales", `${Config.api}/liestciv`);
  const response = await fetch(encodeURI(`${Config.api}/liestciv`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data = await response.json();
  const status = response.status;

  /* Sexo */
  console.log("Sexo datos personales", `${Config.api}/lisex`);
  const response1 = await fetch(encodeURI(`${Config.api}/lisex`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data1 = await response1.json();
  const status1 = response1.status;

  /* Profesion Datos personales */
  console.log(
    "Profesion datos personales",
    `${Config.api}/liproof?comprador_id=${req.session.comprador_id}`
  );
  const response2 = await fetch(
    encodeURI(`${Config.api}/liproof?comprador_id=${req.session.comprador_id}`),
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

  /* Region */
  console.log("Region datos personales", `${Config.api}/lireg`);
  const response3 = await fetch(encodeURI(`${Config.api}/lireg`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data3 = await response3.json();
  const status3 = response3.status;

  /* Provincia */
  let query4 = `liprov`;
  if (obj.region) {
    query4 = `liprovxr?region_id=${obj.region}`;
  }

  console.log("Provincia datos personales", `${Config.api}/${query4}`);
  const response4 = await fetch(encodeURI(`${Config.api}/${query4}`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  const data4 = await response4.json();
  const status4 = response4.status;

  /* Comuna*/
  let query5 = `licomu`;
  if (obj.provincia) {
    query5 = `licomuxp?provincia_id=${obj.provincia}`;
  }

  console.log("Comuna datos personales", `${Config.api}/${query5}`);
  const response5 = await fetch(encodeURI(`${Config.api}/${query5}`), {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${req.session.token}`,
      accept: "application/json"
    })
  });

  console.log(obj);

  const data5 = await response5.json();
  const status5 = response5.status;

  objs.estadoCivil = data.datos;
  objs.sexo = data1.datos;
  objs.profesion = data2.datos;
  objs.region = data3.datos;
  objs.provincia = data4.datos;
  objs.comuna = data5.datos;

  return res.status(status).send(objs);
}

async function getCount(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List datos personales count",
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

async function getDatosPersonales(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get datos personales", `${Config.api}/perxidu?id=${obj.id}`);
  /* Img */
  const response = await fetch(
    encodeURI(`${Config.api}/perxidu?id=${obj.id}`),
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
  getDatosPersonales
};
