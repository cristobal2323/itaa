import express from "express";
import examenFisicoCtrl from "../../controllers/examen_fisico";

const examenFisico = express.Router();
const examenFisicoCount = express.Router();
const examenFisicoInfo = express.Router();
const getExamenFisico = express.Router();

examenFisico.get("/:obj", examenFisicoCtrl.get);
examenFisicoCount.get("/:obj", examenFisicoCtrl.getCount);
examenFisicoInfo.get("/:obj", examenFisicoCtrl.getInfo);

getExamenFisico.get("/:obj", examenFisicoCtrl.getExamenFisico);

export default {
  examenFisico,
  examenFisicoCount,
  examenFisicoInfo,
  getExamenFisico
};
