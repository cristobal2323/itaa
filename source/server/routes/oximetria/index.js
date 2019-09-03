import express from "express";
import oximetriaCtrl from "../../controllers/oximetria";

const oximetria = express.Router();
const oximetriaCount = express.Router();
const oximetriaInfo = express.Router();
const getOximetria = express.Router();

oximetria.get("/:obj", oximetriaCtrl.get);
oximetria.post("/", oximetriaCtrl.add);

oximetriaCount.get("/:obj", oximetriaCtrl.getCount);
oximetriaInfo.get("/:obj", oximetriaCtrl.getInfo);
getOximetria.get("/:obj", oximetriaCtrl.getOximetria);

export default {
  oximetria,
  oximetriaCount,
  oximetriaInfo,
  getOximetria
};
