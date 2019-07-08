import express from "express";
import userCtrl from "../../controllers/user";

const user = express.Router();

user.get("/:obj", userCtrl.get);
user.post("/", userCtrl.add);

export default {
  user
};
