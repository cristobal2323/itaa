import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Encuesta Epworth", `${Config.api}/plantenc?id=40`);
  const response = await fetch(encodeURI(`${Config.api}/plantenc?id=40`), {
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

async function add(req, res) {
  console.log(req.body);
  try {
    console.log(
      "add user",
      `${Config.api}/insepworth?user_id=${req.body.id_user}&sentado_y_leyendo=${
        req.body.sentado_y_leyendo
      }&viendo_la_tv=${req.body.viendo_la_tv}&sentado_inactivo=${
        req.body.sentado_inactivo
      }&como_copiloto=${req.body.como_copiloto}&recostado_media_tarde=${
        req.body.recostado_media_tarde
      }&sentado_y_conversando=${
        req.body.sentado_y_conversando
      }&sentado_despues_comida=${
        req.body.sentado_despues_comida
      }&en_auto_cuando_para=${req.body.en_auto_cuando_para}`
    );

    const response = await fetch(
      `${Config.api}/insepworth?user_id=${req.body.id_user}&sentado_y_leyendo=${
        req.body.sentado_y_leyendo
      }&viendo_la_tv=${req.body.viendo_la_tv}&sentado_inactivo=${
        req.body.sentado_inactivo
      }&como_copiloto=${req.body.como_copiloto}&recostado_media_tarde=${
        req.body.recostado_media_tarde
      }&sentado_y_conversando=${
        req.body.sentado_y_conversando
      }&sentado_despues_comida=${
        req.body.sentado_despues_comida
      }&en_auto_cuando_para=${req.body.en_auto_cuando_para}`,
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
  add
};
