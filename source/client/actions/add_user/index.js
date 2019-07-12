import {
  SAVE_USER_INIT,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  RESET_ADD_USER
} from "./types";
import API from "./api";

export function resetAddUser() {
  return {
    type: RESET_ADD_USER
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_USER_SUCCESS,
    payload: data
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_USER_FAILURE,
    errorSave: error
  };
}

function saveApiInit() {
  return {
    type: SAVE_USER_INIT
  };
}

export function saveUserApi(data) {
  return async dispatch => {
    dispatch(saveApiInit());
    try {
      let resp = await API.data.handleSubmit(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}
