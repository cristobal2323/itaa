import express from "express";
import homeCtrl from "../../controllers/home/";

const home = express.Router();
const homeGraph = express.Router();

home.get("/:obj", homeCtrl.get);
homeGraph.get("/:obj", homeCtrl.getGraph);

export default {
  home,
  homeGraph
};
