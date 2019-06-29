import express from "express";
import localStoreCtrl from "../../controllers/localStore/";

const localStore = express.Router();

localStore.post("/", localStoreCtrl.saveStore);
localStore.delete("/", localStoreCtrl.deleteStore);

export default {
  localStore
};
