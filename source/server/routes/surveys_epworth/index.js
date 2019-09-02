import express from "express";
import surveysEpworthCtrl from "../../controllers/surveys_epworth";

const surveysEpworth = express.Router();

surveysEpworth.get("/:obj", surveysEpworthCtrl.get);
surveysEpworth.post("/", surveysEpworthCtrl.add);

export default {
  surveysEpworth
};
