import {
  FETCH_HOME_INIT,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
  FETCH_HOME_GRAPH_INIT,
  FETCH_HOME_GRAPH_SUCCESS,
  FETCH_HOME_GRAPH_FAILURE
} from "./types";
import API from "./api";

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

/* Confing */

function fetchApiGraphSuccess(data) {
  return {
    type: FETCH_HOME_GRAPH_SUCCESS,
    payload: data
  };
}

function fetchApiGraphFailure(error) {
  return {
    type: FETCH_HOME_GRAPH_FAILURE,
    error
  };
}

function fetchApiGraphInit() {
  return {
    type: FETCH_HOME_GRAPH_INIT
  };
}

export function fetchHomeGraphApi(data) {
  return async dispatch => {
    dispatch(fetchApiGraphInit());
    try {
      const resp = await API.data.getGraph(data);
      return dispatch(fetchApiGraphSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiGraphFailure(error));
    }
  };
}
