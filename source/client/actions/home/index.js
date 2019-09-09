import {
  FETCH_HOME_INIT,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
  RESET_HOME,
  FETCH_HOME_COUNT_INIT,
  FETCH_HOME_COUNT_SUCCESS,
  FETCH_HOME_COUNT_FAILURE
} from "./types";
import API from "./api";

/* Config setting */
export function resetHome() {
  return {
    type: RESET_HOME
  };
}

/* Home */

function fetchApiSuccess(data) {
  return {
    type: FETCH_HOME_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_HOME_FAILURE,
    error
  };
}

function fetchApiInit() {
  return {
    type: FETCH_HOME_INIT
  };
}

export function fetchHomeApi(data) {
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
    type: FETCH_HOME_COUNT_SUCCESS,
    payload: data
  };
}

function fetchApiCountFailure(error) {
  return {
    type: FETCH_HOME_COUNT_FAILURE
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_HOME_COUNT_INIT
  };
}

export function fetchHomeCountApi(data) {
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
