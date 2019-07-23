import express from "express";
import datosPersonalesCtrl from "../../controllers/datos_personales";

const datosPersonales = express.Router();
const datosPersonalesCount = express.Router();

datosPersonales.get("/:obj", datosPersonalesCtrl.get);
datosPersonalesCount.get("/:obj", datosPersonalesCtrl.getCount);

export default {
  datosPersonales,
  datosPersonalesCount
};
