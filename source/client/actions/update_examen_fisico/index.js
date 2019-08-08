import {
  FETCH_GET_EXAMEN_FISICO_INIT,
  FETCH_GET_EXAMEN_FISICO_SUCCESS,
  FETCH_GET_EXAMEN_FISICO_FAILURE,
  UPDATE_EXAMEN_FISICO_INIT,
  UPDATE_EXAMEN_FISICO_SUCCESS,
  UPDATE_EXAMEN_FISICO_FAILURE,
  RESET_GET_EXAMEN_FISICO
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateExamenFisico() {
  return {
    type: RESET_GET_EXAMEN_FISICO
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_EXAMEN_FISICO_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_EXAMEN_FISICO_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_EXAMEN_FISICO_INIT
  };
}

export function fetchGetExamenFisicoApi(data) {
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
    type: UPDATE_EXAMEN_FISICO_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_EXAMEN_FISICO_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_EXAMEN_FISICO_INIT
  };
}

export function updateExamenFisicoApi(data) {
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
