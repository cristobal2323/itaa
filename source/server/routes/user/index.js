import express from "express";
import userCtrl from "../../controllers/user";

const user = express.Router();
const getUser = express.Router();

user.get("/:obj", userCtrl.get);
user.post("/", userCtrl.add);
user.put("/", userCtrl.update);

getUser.get("/:obj", userCtrl.getUser);

export default {
  user,
  getUser
};
