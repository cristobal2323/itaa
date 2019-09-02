import {
  FETCH_LIST_SURVEYS_EPWORTH_INIT,
  FETCH_LIST_SURVEYS_EPWORTH_SUCCESS,
  FETCH_LIST_SURVEYS_EPWORTH_FAILURE,
  RESET_LIST_SURVEYS_EPWORTH,
  RESET_MODAL_SURVEYS_EPWORTH,
  SAVE_SURVEYS_EPWORTH_INIT,
  SAVE_SURVEYS_EPWORTH_SUCCESS,
  SAVE_SURVEYS_EPWORTH_FAILURE
} from "./types";
import API from "./api";

/* Config setting */
export function resetSurveysEpworth() {
  return {
    type: RESET_LIST_SURVEYS_EPWORTH
  };
}
export function resetModalSurveysEpworth() {
  return {
    type: RESET_MODAL_SURVEYS_EPWORTH
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_SURVEYS_EPWORTH_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_SURVEYS_EPWORTH_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_SURVEYS_EPWORTH_INIT
  };
}

export function fetchSurveysEpworthApi(data) {
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

/* Add */

function saveApiSuccess(data) {
  return {
    type: SAVE_SURVEYS_EPWORTH_SUCCESS,
    payload: data
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_SURVEYS_EPWORTH_FAILURE,
    errorSave: error
  };
}

function saveApiInit() {
  return {
    type: SAVE_SURVEYS_EPWORTH_INIT
  };
}

export function saveSurveysEpworthApi(data) {
  console.log("saveSurveysEpworthApi");
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
