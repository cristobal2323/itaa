import {
  FETCH_GET_USER_INIT,
  FETCH_GET_USER_SUCCESS,
  FETCH_GET_USER_FAILURE,
  UPDATE_USER_INIT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_GET_USER
} from "./types";
import API from "./api";

/* Config setting */
export function resetUpdateUser() {
  return {
    type: RESET_GET_USER
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_GET_USER_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_GET_USER_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_GET_USER_INIT
  };
}

export function fetchGetUserApi(data) {
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
    type: UPDATE_USER_SUCCESS,
    payload: data
  };
}

function updateApiFailure(error) {
  return {
    type: UPDATE_USER_FAILURE
  };
}

function updateApiInit() {
  return {
    type: UPDATE_USER_INIT
  };
}

export function updateUserApi(data) {
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
