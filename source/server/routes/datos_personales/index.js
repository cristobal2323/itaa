import express from "express";
import datosPersonalesCtrl from "../../controllers/datos_personales";

const datosPersonales = express.Router();
const datosPersonalesCount = express.Router();
const datosPersonalesInfo = express.Router();
const getDatosPersonales = express.Router();

datosPersonales.get("/:obj", datosPersonalesCtrl.get);
datosPersonalesCount.get("/:obj", datosPersonalesCtrl.getCount);
datosPersonalesInfo.get("/:obj", datosPersonalesCtrl.getInfo);

getDatosPersonales.get("/:obj", datosPersonalesCtrl.getDatosPersonales);

export default {
  datosPersonales,
  datosPersonalesCount,
  datosPersonalesInfo,
  getDatosPersonales
};
