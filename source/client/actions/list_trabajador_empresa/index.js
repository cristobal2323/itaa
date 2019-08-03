import {
  FETCH_LIST_TRABAJADOR_EMPRESA_INIT,
  FETCH_LIST_TRABAJADOR_EMPRESA_SUCCESS,
  FETCH_LIST_TRABAJADOR_EMPRESA_FAILURE,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_INIT,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_SUCCESS,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_FAILURE,
  DELETE_DATOS_PERSONALES_INIT,
  DELETE_DATOS_PERSONALES_SUCCESS,
  DELETE_DATOS_PERSONALES_FAILURE,
  RESET_LIST_TRABAJADOR_EMPRESA,
  RESET_MODAL_TRABAJADOR_EMPRESA
} from "./types";
import API from "./api";

/* Config setting */
export function resetListTrabajadorEmpresa() {
  return {
    type: RESET_LIST_TRABAJADOR_EMPRESA
  };
}
export function resetModalTrabajadorEmpresa() {
  return {
    type: RESET_MODAL_TRABAJADOR_EMPRESA
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_INIT
  };
}

export function fetchTrabajadorEmpresaApi(data) {
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

/* Fetch Count */

function fetchApiCountSuccess(data) {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_SUCCESS,
    payload: data
  };
}

function fetchApiCountFailure(error) {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_FAILURE
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_INIT
  };
}

export function fetchTrabajadorEmpresaCountApi(data) {
  return async dispatch => {
    dispatch(fetchApiCountInit());
    try {
      const resp = await API.data.getCount(data);
      return dispatch(fetchApiCountSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiCountFailure(error));
    }
  };
}

/* Driver Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_DATOS_PERSONALES_SUCCESS,
    payload: data
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_DATOS_PERSONALES_FAILURE,
    errordelete: error
  };
}

function deleteApiInit() {
  return {
    type: DELETE_DATOS_PERSONALES_INIT
  };
}

export function deleteTrabajadorEmpresaApi(data) {
  return async dispatch => {
    dispatch(deleteApiInit());
    try {
      const resp = await API.data.deleteEntidad(data);
      return dispatch(deleteApiSuccess(resp));
    } catch (error) {
      return dispatch(deleteApiFailure(error));
    }
  };
}
