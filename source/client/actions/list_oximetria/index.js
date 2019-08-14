import {
  FETCH_LIST_OXIMETRIA_INIT,
  FETCH_LIST_OXIMETRIA_SUCCESS,
  FETCH_LIST_OXIMETRIA_FAILURE,
  FETCH_LIST_OXIMETRIA_COUNT_INIT,
  FETCH_LIST_OXIMETRIA_COUNT_SUCCESS,
  FETCH_LIST_OXIMETRIA_COUNT_FAILURE,
  DELETE_OXIMETRIA_INIT,
  DELETE_OXIMETRIA_SUCCESS,
  DELETE_OXIMETRIA_FAILURE,
  RESET_LIST_OXIMETRIA,
  RESET_MODAL_OXIMETRIA
} from "./types";
import API from "./api";

/* Config setting */
export function resetListOximetria() {
  return {
    type: RESET_LIST_OXIMETRIA
  };
}
export function resetModalOximetria() {
  return {
    type: RESET_MODAL_OXIMETRIA
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_OXIMETRIA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_OXIMETRIA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_OXIMETRIA_INIT
  };
}

export function fetchOximetriaApi(data) {
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
    type: FETCH_LIST_OXIMETRIA_COUNT_SUCCESS,
    payload: data
  };
}

function fetchApiCountFailure(error) {
  return {
    type: FETCH_LIST_OXIMETRIA_COUNT_FAILURE
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_LIST_OXIMETRIA_COUNT_INIT
  };
}

export function fetchOximetriaCountApi(data) {
  return async dispatch => {
    dispatch(fetchApiCountInit());
    try {
      const resp = await API.data.getCount(data);
      return dispatch(fetchApiCountSuccess(resp));
    } catch (error) {
      console.log(error);
      return dispatch(fetchApiCountFailure(error));
    }
  };
}

/* Driver Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_OXIMETRIA_SUCCESS,
    payload: data
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_OXIMETRIA_FAILURE,
    errordelete: error
  };
}

function deleteApiInit() {
  return {
    type: DELETE_OXIMETRIA_INIT
  };
}

export function deleteOximetriaApi(data) {
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
