import {
  FETCH_LIST_POLISOMNOGRAFIA_INIT,
  FETCH_LIST_POLISOMNOGRAFIA_SUCCESS,
  FETCH_LIST_POLISOMNOGRAFIA_FAILURE,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_INIT,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_SUCCESS,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_FAILURE,
  DELETE_POLISOMNOGRAFIA_INIT,
  DELETE_POLISOMNOGRAFIA_SUCCESS,
  DELETE_POLISOMNOGRAFIA_FAILURE,
  RESET_LIST_POLISOMNOGRAFIA,
  RESET_MODAL_OLiISOMNOGRAFIA
} from "./types";
import API from "./api";

/* Config setting */
export function resetListPolisomnografia() {
  return {
    type: RESET_LIST_POLISOMNOGRAFIA
  };
}
export function resetModalPolisomnografia() {
  return {
    type: RESET_MODAL_OLiISOMNOGRAFIA
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_INIT
  };
}

export function fetchPolisomnografiaApi(data) {
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
    type: FETCH_LIST_POLISOMNOGRAFIA_COUNT_SUCCESS,
    payload: data
  };
}

function fetchApiCountFailure(error) {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_COUNT_FAILURE
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_COUNT_INIT
  };
}

export function fetchPolisomnografiaCountApi(data) {
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
    type: DELETE_POLISOMNOGRAFIA_SUCCESS,
    payload: data
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_POLISOMNOGRAFIA_FAILURE,
    errordelete: error
  };
}

function deleteApiInit() {
  return {
    type: DELETE_POLISOMNOGRAFIA_INIT
  };
}

export function deletePolisomnografiaApi(data) {
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
