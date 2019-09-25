import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(
    "List oximetria",
    `${Config.api}/lioxi?reg_inicio=${obj.pag.start}&reg_fin=${
      obj.pag.end
    }&comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/lioxi?reg_inicio=${obj.pag.start}&reg_fin=${
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
    "List oximetria count",
    `${Config.api}/paglioxi?comprador_id=${req.session.comprador_id}`
  );
  const response = await fetch(
    encodeURI(
      `${Config.api}/paglioxi?comprador_id=${req.session.comprador_id}`
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

async function add(req, res) {
  console.log(req.body);
  try {
    console.log(
      "add user",
      `${Config.api}/oxireg?user_id=${req.body.id_user}&spo2_basal=${
        req.body.spo2Basal
      }&spo2_media=${req.body.spo2Media}&spo2_minima=${
        req.body.spo2Minima
      }&cantidad_desaturacion_85=${
        req.body.cantidadDesaturacion85
      }&cantidad_desaturacion_80=${
        req.body.cantidadDesaturacion80
      }&tiempo_spo2_85=${req.body.tiempoSpo285}&desaturacion_mas_larga=${
        req.body.desaturacionMasLarga
      }&desaturacion_mas_grande=${
        req.body.desaturacionMasGrande
      }&desaturacion_promedio=${
        req.body.desaturacionPromedio
      }&desaturacion_mas_profunda=${
        req.body.desaturacionMasProfunda
      }&suma_desaturaciones=${req.body.sumaDesaturaciones}&responsable_id=${
        req.body.id_responsable
      }`
    );

    const response = await fetch(
      `${Config.api}/oxireg?user_id=${req.body.id_user}&spo2_basal=${
        req.body.spo2Basal
      }&spo2_media=${req.body.spo2Media}&spo2_minima=${
        req.body.spo2Minima
      }&cantidad_desaturacion_85=${
        req.body.cantidadDesaturacion85
      }&cantidad_desaturacion_80=${
        req.body.cantidadDesaturacion80
      }&tiempo_spo2_85=${req.body.tiempoSpo285}&desaturacion_mas_larga=${
        req.body.desaturacionMasLarga
      }&desaturacion_mas_grande=${
        req.body.desaturacionMasGrande
      }&desaturacion_promedio=${
        req.body.desaturacionPromedio
      }&desaturacion_mas_profunda=${
        req.body.desaturacionMasProfunda
      }&suma_desaturaciones=${req.body.sumaDesaturaciones}&responsable_id=${
        req.body.id_responsable
      }`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${req.session.token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify(req.body)
      }
    );
    const data = await response.json();
    const status = response.status;
    return res.status(status).send(data);
  } catch (err) {
    return res.status(401).send({ message: "Problem API" });
  }
}

module.exports = {
  get,
  getCount,
  getInfo,
  getOximetria,
  add
};
