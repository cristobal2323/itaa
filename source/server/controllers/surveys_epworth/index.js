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
  try {
    console.log(
      "add user",
      `${
        Config.api
      }/insepworth?user_id=10&sentado_y_leyendo=1&viendo_la_tv=1&sentado_inactivo=2&como_copiloto=3&recostado_media_tarde=0&sentado_y_conversando=1&sentado_despues_comida=2&en_auto_cuando_para=1`
    );

    const response = await fetch(
      `${
        Config.api
      }/insepworth?user_id=10&sentado_y_leyendo=1&viendo_la_tv=1&sentado_inactivo=2&como_copiloto=3&recostado_media_tarde=0&sentado_y_conversando=1&sentado_despues_comida=2&en_auto_cuando_para=1`,
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
