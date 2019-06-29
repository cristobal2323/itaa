import {
  SAVE_LOGIN_INIT,
  SAVE_LOGIN_SUCCESS,
  SAVE_LOGIN_FAILURE,
  SAVE_REGISTER_INIT,
  SAVE_REGISTER_SUCCESS,
  SAVE_REGISTER_FAILURE,
  SAVE_FORGET_INIT,
  SAVE_FORGET_SUCCESS,
  SAVE_FORGET_FAILURE,
  RESET_LOGIN,
  LOG_OUT
} from "./types";
import API from "./api";

/* Actions Creators */

export function resetLogin() {
  return {
    type: RESET_LOGIN
  };
}

/* LOG_OUT */

export function logOut() {
  return {
    type: LOG_OUT
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_LOGIN_SUCCESS,
    payloadSave: data,
    mensajeError: null,
    status: null
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_LOGIN_FAILURE,
    errorSave: error
  };
}

function saveApiInit() {
  return {
    type: SAVE_LOGIN_INIT
  };
}

export function saveLoginApi(data) {
  return async dispatch => {
    dispatch(saveApiInit());
    try {
      let resp = await API.data.handleLogin(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}

/* REGISTER (Async) */

function saveRegisterApiSuccess(data) {
  return {
    type: SAVE_REGISTER_SUCCESS,
    payload: data
  };
}

function saveRegisterApiFailure(error) {
  return {
    type: SAVE_REGISTER_FAILURE,
    error
  };
}

function saveRegisterApiInit() {
  return {
    type: SAVE_REGISTER_INIT
  };
}

export function saveRegisterApi(data) {
  return async dispatch => {
    dispatch(saveRegisterApiInit());
    try {
      let resp = await API.data.handleRegister(data);
      return dispatch(saveRegisterApiSuccess(resp));
    } catch (error) {
      return dispatch(saveRegisterApiFailure(error));
    }
  };
}

/* Forget (Async) */

function saveForgetApiSuccess(data) {
  return {
    type: SAVE_FORGET_SUCCESS,
    payload: data
  };
}

function saveForgetApiFailure(error) {
  return {
    type: SAVE_FORGET_FAILURE,
    error
  };
}

function saveForgetApiInit() {
  return {
    type: SAVE_FORGET_INIT
  };
}

export function saveForgetApi(data) {
  return async dispatch => {
    dispatch(saveForgetApiInit());
    try {
      let resp = await API.data.handleForget(data);
      return dispatch(saveForgetApiSuccess(resp));
    } catch (error) {
      return dispatch(saveForgetApiFailure(error));
    }
  };
}
