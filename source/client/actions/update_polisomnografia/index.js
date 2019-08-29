import {
  FETCH_GET_POLISOMNOGRAFIA_INIT,
  FETCH_GET_POLISOMNOGRAFIA_SUCCESS,
  FETCH_GET_POLISOMNOGRAFIA_FAILURE,
  UPDATE_POLISOMNOGRAFIA_INIT,
  UPDATE_POLISOMNOGRAFIA_SUCCESS,
  UPDATE_POLISOMNOGRAFIA_FAILURE,
  RESET_GET_POLISOMNOGRAFIA
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdatePolisomnografia() {
  return {
    type: RESET_GET_POLISOMNOGRAFIA
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_POLISOMNOGRAFIA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_POLISOMNOGRAFIA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_POLISOMNOGRAFIA_INIT
  };
}

export function fetchGetPolisomnografiaApi(data) {
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
    type: UPDATE_POLISOMNOGRAFIA_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_POLISOMNOGRAFIA_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_POLISOMNOGRAFIA_INIT
  };
}

export function updatePolisomnografiaApi(data) {
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
