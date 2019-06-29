async function saveStore(req, res) {
  let localStorage;

  if (typeof window === "undefined") {
    require("fs");
    let LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
  }
  localStorage.setItem(req.body.key, req.body.value);
  return res.status(200).send({ ok: true });
}

async function deleteStore(req, res) {
  let localStorage;

  if (typeof window === "undefined") {
    require("fs");
    let LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
  }
  localStorage.clear();
  req.session = null;
  return res.status(200).send({ ok: true });
}

module.exports = {
  saveStore,
  deleteStore
};
