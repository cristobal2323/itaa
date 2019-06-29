import fetch from "isomorphic-fetch";
import Config from "../config/";

async function handleLogin(req, res) {
  console.log(req.body);
  try {
    const response = await fetch(
      `${Config.api}/authenticate?email=${req.body.email}&password=${
        req.body.pass
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

    data.user = req.body.email;

    req.session.token = data.auth_token;
    req.session.user = req.body.email;

    return res.status(status).send(data);
  } catch (err) {
    return res.status(401).send({ message: "Problem API" });
  }
}

async function handleRegister(req, res) {
  try {
    console.log(
      `${Config.api}/user.json?email=${req.body.email}&firstname=${
        req.body.firstname
      }&lastname=${req.body.lastname}`
    );
    const response = await fetch(
      `${Config.api}/user.json?email=${req.body.email}&firstname=${
        req.body.firstname
      }&lastname=${req.body.lastname}`,
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

async function handleForget(req, res) {
  try {
    console.log(`${Config.api}/recuperaclave?=${req.body.email}`);

    const response = await fetch(
      `${Config.api}/recuperaclave?=${req.body.email}`,
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
  handleLogin,
  handleRegister,
  handleForget
};
