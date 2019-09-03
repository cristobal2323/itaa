import {
  FETCH_LIST_OXIMETRIA_INFO_INIT,
  FETCH_LIST_OXIMETRIA_INFO_SUCCESS,
  FETCH_LIST_OXIMETRIA_INFO_FAILURE,
  RESET_LIST_OXIMETRIA_INFO,
  RESET_MODAL_OXIMETRIA,
  SAVE_OXIMETRIA_INIT,
  SAVE_OXIMETRIA_SUCCESS,
  SAVE_OXIMETRIA_FAILURE
} from "./types";
import API from "./api";

/* Config setting */
export function resetAddOximetria() {
  return {
    type: RESET_LIST_OXIMETRIA_INFO
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
    type: FETCH_LIST_OXIMETRIA_INFO_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_OXIMETRIA_INFO_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_OXIMETRIA_INFO_INIT
  };
}

export function fetchOximetriaInfoApi(data) {
  return async dispatch => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.getInfo(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

/* Add */

function saveApiSuccess(data) {
  return {
    type: SAVE_OXIMETRIA_SUCCESS,
    payload: data
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_OXIMETRIA_FAILURE,
    errorSave: error
  };
}

function saveApiInit() {
  return {
    type: SAVE_OXIMETRIA_INIT
  };
}

export function saveAddOximetriaApi(data) {
  return async dispatch => {
    dispatch(saveApiInit());
    try {
      let resp = await API.data.handleSubmit(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}
