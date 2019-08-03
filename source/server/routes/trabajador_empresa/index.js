import express from "express";
import trabajadorEmpresaCtrl from "../../controllers/trabajador_empresa";

const trabajadorEmpresa = express.Router();
const trabajadorEmpresaCount = express.Router();
const trabajadorEmpresaInfo = express.Router();
const getTrabajadorEmpresa = express.Router();

trabajadorEmpresa.get("/:obj", trabajadorEmpresaCtrl.get);
trabajadorEmpresaCount.get("/:obj", trabajadorEmpresaCtrl.getCount);
trabajadorEmpresaInfo.get("/:obj", trabajadorEmpresaCtrl.getInfo);

getTrabajadorEmpresa.get("/:obj", trabajadorEmpresaCtrl.getTrabajadorEmpresa);

export default {
  trabajadorEmpresa,
  trabajadorEmpresaCount,
  trabajadorEmpresaInfo,
  getTrabajadorEmpresa
};
