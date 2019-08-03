import {
  FETCH_GET_TRABAJADOR_EMPRESA_INIT,
  FETCH_GET_TRABAJADOR_EMPRESA_SUCCESS,
  FETCH_GET_TRABAJADOR_EMPRESA_FAILURE,
  UPDATE_TRABAJADOR_EMPRESA_INIT,
  UPDATE_TRABAJADOR_EMPRESA_SUCCESS,
  UPDATE_TRABAJADOR_EMPRESA_FAILURE,
  RESET_GET_TRABAJADOR_EMPRESA
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateTrabajadorEmpresa() {
  return {
    type: RESET_GET_TRABAJADOR_EMPRESA
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_TRABAJADOR_EMPRESA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_TRABAJADOR_EMPRESA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_TRABAJADOR_EMPRESA_INIT
  };
}

export function fetchGetTrabajadorEmpresaApi(data) {
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
    type: UPDATE_TRABAJADOR_EMPRESA_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_TRABAJADOR_EMPRESA_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_TRABAJADOR_EMPRESA_INIT
  };
}

export function updateTrabajadorEmpresaApi(data) {
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
