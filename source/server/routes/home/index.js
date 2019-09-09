import express from "express";
import homeCtrl from "../../controllers/home/";

const home = express.Router();
const homeCount = express.Router();

home.get("/:obj", homeCtrl.get);
homeCount.get("/:obj", homeCtrl.getCount);

export default {
  home,
  homeCount
};
