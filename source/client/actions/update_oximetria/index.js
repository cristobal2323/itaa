import {
  FETCH_GET_OXIMETRIA_INIT,
  FETCH_GET_OXIMETRIA_SUCCESS,
  FETCH_GET_OXIMETRIA_FAILURE,
  UPDATE_OXIMETRIA_INIT,
  UPDATE_OXIMETRIA_SUCCESS,
  UPDATE_OXIMETRIA_FAILURE,
  RESET_GET_OXIMETRIA
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateOximetria() {
  return {
    type: RESET_GET_OXIMETRIA
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_OXIMETRIA_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_OXIMETRIA_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_OXIMETRIA_INIT
  };
}

export function fetchGetOximetriaApi(data) {
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
    type: UPDATE_OXIMETRIA_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_OXIMETRIA_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_OXIMETRIA_INIT
  };
}

export function updateOximetriaApi(data) {
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
