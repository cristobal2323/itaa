import fetch from "isomorphic-fetch";
import Config from "../config/";

function permission(permissions) {
  const views = [];
  permissions.forEach(item => {
    switch (item.codigo) {
      case "admin":
        views.push("admin");
        break;
      case "FatigueModuleFullAccess":
        views.push("other");
        break;
      default:
    }
  });
  return views;
}

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log(req.session.token);

  /* Img */
  try {
    const response = await fetch(
      encodeURI(`${Config.api}/user.json?email=${obj.user}`),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${req.session.token}`,
          accept: "application/json"
        })
      }
    );

    const data = await response.json();
    data.datos.permits = permission(data.datos.permissions);
    const status = response.status;
    return res.status(status).send(data);
  } catch (e) {
    return res.status(401).send({});
  }
}

module.exports = {
  get
};
