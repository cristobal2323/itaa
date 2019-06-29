import express from "express";
import dashboardCtrl from "../../controllers/dashboard/";

const dashboard = express.Router();

dashboard.get("/:obj", dashboardCtrl.get);

export default {
  dashboard
};
