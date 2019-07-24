import {
  FETCH_GET_DATOS_PERSONALES_INIT,
  FETCH_GET_DATOS_PERSONALES_SUCCESS,
  FETCH_GET_DATOS_PERSONALES_FAILURE,
  UPDATE_DATOS_PERSONALES_INIT,
  UPDATE_DATOS_PERSONALES_SUCCESS,
  UPDATE_DATOS_PERSONALES_FAILURE,
  RESET_GET_DATOS_PERSONALES
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateDatosPersonales() {
  return {
    type: RESET_GET_DATOS_PERSONALES
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_DATOS_PERSONALES_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_DATOS_PERSONALES_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_DATOS_PERSONALES_INIT
  };
}

export function fetchGetDatosPersonalesApi(data) {
  return async dispatch => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

/* Update (Async) */

function updateApiSuccess(data) {
  return {
    type: UPDATE_DATOS_PERSONALES_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_DATOS_PERSONALES_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_DATOS_PERSONALES_INIT
  };
}

export function updateDatosPersonalesApi(data) {
  return async dispatch => {
    dispatch(updateApiInit());
    try {
      let resp = await API.data.update(data);
      return dispatch(updateApiSuccess(resp));
    } catch (error) {
      return dispatch(updateApiFailure(error));
    }
  };
}
