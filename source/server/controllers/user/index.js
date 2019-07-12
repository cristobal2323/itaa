import fetch from "isomorphic-fetch";
import Config from "../config";

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("List user", `${Config.api}/liusers`);
  /* Img */
  const response = await fetch(encodeURI(`${Config.api}/liusers`), {
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

async function getUser(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Get user", `${Config.api}/userid?id=${obj.id}`);
  /* Img */
  const response = await fetch(encodeURI(`${Config.api}/userid?id=${obj.id}`), {
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
      `${Config.api}/cruser?estado=1&email=${req.body.email}&password=${
        req.body.pass
      }&password_confirmation=${req.body.passConfirm}`
    );

    const response = await fetch(
      `${Config.api}/cruser?estado=1&email=${req.body.email}&password=${
        req.body.pass
      }&password_confirmation=${req.body.passConfirm}`,
      {
        method: "POST",
        headers: new Headers({
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

async function update(req, res) {
  try {
    console.log(
      "updateuser",
      `${Config.api}/upduser?id=${req.body.id}&estado=1&email=${
        req.body.email
      }&password=${req.body.pass}&password_confirmation=${req.body.passConfirm}`
    );

    const response = await fetch(
      `${Config.api}/upduser?id=${req.body.id}&estado=1&email=${
        req.body.email
      }&password=${req.body.pass}&password_confirmation=${
        req.body.passConfirm
      }`,
      {
        method: "POST",
        headers: new Headers({
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
  getUser,
  add,
  update
};
