import {
  FETCH_GET_EXAMEN_MEDICO_INIT,
  FETCH_GET_EXAMEN_MEDICO_SUCCESS,
  FETCH_GET_EXAMEN_MEDICO_FAILURE,
  UPDATE_EXAMEN_MEDICO_INIT,
  UPDATE_EXAMEN_MEDICO_SUCCESS,
  UPDATE_EXAMEN_MEDICO_FAILURE,
  RESET_GET_EXAMEN_MEDICO
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateExamenMedico() {
  return {
    type: RESET_GET_EXAMEN_MEDICO
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_EXAMEN_MEDICO_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_EXAMEN_MEDICO_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_EXAMEN_MEDICO_INIT
  };
}

export function fetchGetExamenMedicoApi(data) {
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
    type: UPDATE_EXAMEN_MEDICO_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_EXAMEN_MEDICO_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_EXAMEN_MEDICO_INIT
  };
}

export function updateExamenMedicoApi(data) {
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
