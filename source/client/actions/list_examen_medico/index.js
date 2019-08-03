import {
  FETCH_LIST_EXAMEN_MEDICO_INIT,
  FETCH_LIST_EXAMEN_MEDICO_SUCCESS,
  FETCH_LIST_EXAMEN_MEDICO_FAILURE,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_INIT,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_SUCCESS,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_FAILURE,
  DELETE_EXAMEN_MEDICO_INIT,
  DELETE_EXAMEN_MEDICO_SUCCESS,
  DELETE_EXAMEN_MEDICO_FAILURE,
  RESET_LIST_EXAMEN_MEDICO,
  RESET_MODAL_EXAMEN_MEDIC
} from "./types";
import API from "./api";

/* Config setting */
export function resetListExamenMedico() {
  return {
    type: RESET_LIST_EXAMEN_MEDICO
  };
}
export function resetModalExamenMedico() {
  return {
    type: RESET_MODAL_EXAMEN_MEDIC
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_EXAMEN_MEDICO_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_EXAMEN_MEDICO_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_EXAMEN_MEDICO_INIT
  };
}

export function fetchExamenMedicoApi(data) {
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
    type: FETCH_LIST_EXAMEN_MEDICO_COUNT_SUCCESS,
    payload: data
  };
}

function fetchApiCountFailure(error) {
  return {
    type: FETCH_LIST_EXAMEN_MEDICO_COUNT_FAILURE
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_LIST_EXAMEN_MEDICO_COUNT_INIT
  };
}

export function fetchExamenMedicoCountApi(data) {
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
    type: DELETE_EXAMEN_MEDICO_SUCCESS,
    payload: data
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_EXAMEN_MEDICO_FAILURE,
    errordelete: error
  };
}

function deleteApiInit() {
  return {
    type: DELETE_EXAMEN_MEDICO_INIT
  };
}

export function deleteExamenMedicoApi(data) {
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
