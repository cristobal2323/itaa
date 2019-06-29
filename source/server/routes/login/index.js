import express from "express";
import loginCtrl from "../../controllers/login/";

const login = express.Router();
const loginRegister = express.Router();
const loginForget = express.Router();

login.post("/", loginCtrl.handleLogin);
loginRegister.post("/", loginCtrl.handleRegister);
loginForget.post("/", loginCtrl.handleForget);

export default {
  login,
  loginRegister,
  loginForget
};
