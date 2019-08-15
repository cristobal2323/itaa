import express from "express";
import polisomnografiaCtrl from "../../controllers/polisomnografia";

const polisomnografia = express.Router();
const polisomnografiaCount = express.Router();
const polisomnografiaInfo = express.Router();
const getPolisomnografia = express.Router();

polisomnografia.get("/:obj", polisomnografiaCtrl.get);
polisomnografiaCount.get("/:obj", polisomnografiaCtrl.getCount);
polisomnografiaInfo.get("/:obj", polisomnografiaCtrl.getInfo);

getPolisomnografia.get("/:obj", polisomnografiaCtrl.getPolisomnografia);

export default {
  polisomnografia,
  polisomnografiaCount,
  polisomnografiaInfo,
  getPolisomnografia
};
