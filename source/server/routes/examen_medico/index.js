import express from "express";
import examenMedicoCtrl from "../../controllers/examen_medico";

const examenMedico = express.Router();
const examenMedicoCount = express.Router();
const examenMedicoInfo = express.Router();
const getExamenMedico = express.Router();

examenMedico.get("/:obj", examenMedicoCtrl.get);
examenMedicoCount.get("/:obj", examenMedicoCtrl.getCount);
examenMedicoInfo.get("/:obj", examenMedicoCtrl.getInfo);

getExamenMedico.get("/:obj", examenMedicoCtrl.getExamenMedico);

export default {
  examenMedico,
  examenMedicoCount,
  examenMedicoInfo,
  getExamenMedico
};
