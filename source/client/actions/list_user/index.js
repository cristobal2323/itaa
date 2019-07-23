import {
  FETCH_LIST_USER_INIT,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE,
  DELETE_USER_INIT,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_LIST_USER,
  RESET_MODAL_USER
} from "./types";
import API from "./api";

/* Config setting */
export function resetListUser() {
  return {
    type: RESET_LIST_USER
  };
}
export function resetModalUser() {
  return {
    type: RESET_MODAL_USER
  };
}

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_USER_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_USER_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_USER_INIT
  };
}

export function fetchListUserApi(data) {
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

/* Driver Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    errordelete: error
  };
}

function deleteApiInit() {
  return {
    type: DELETE_USER_INIT
  };
}

export function deleteUserApi(data) {
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
